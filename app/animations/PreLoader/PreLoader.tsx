import { useEffect, useState } from "react";
import { preLoaderAnim, exitPreLoader } from "./loader";
import "./preloader.css";

interface PreLoaderProps {
  heroReady?: boolean;
  loadProgress?: number;
  setIntroDone?: (done: boolean) => void;
}

const PreLoader = ({ heroReady = false, loadProgress = 0, setIntroDone }: PreLoaderProps) => {
  const [localIntroDone, setLocalIntroDone] = useState(false);
  const [displayedProgress, setDisplayedProgress] = useState(0);

  useEffect(() => {
    preLoaderAnim(() => {
      setLocalIntroDone(true);
      setIntroDone?.(true);
    });
  }, [setIntroDone]);

  // Smoothly animate the displayed progress
  useEffect(() => {
    if (loadProgress === 0) return;

    const interval = setInterval(() => {
      setDisplayedProgress(prev => {
        if (prev >= loadProgress) {
          clearInterval(interval);
          return prev;
        }
        // Increment by a dynamic step or fixed amount
        // If difference is large, jump bigger, but let's keep it somewhat linear-ish for "loading" feel
        const diff = loadProgress - prev;
        const step = Math.ceil(diff / 5); // Catch up in ~5 ticks
        return prev + step;
      });
    }, 50); // Update every 50ms

    return () => clearInterval(interval);
  }, [loadProgress]);

  // Force 100% when hero is ready/done just in case
  useEffect(() => {
    if (loadProgress === 100) setDisplayedProgress(100);
  }, [loadProgress]);

  useEffect(() => {
    if (heroReady && localIntroDone) {
      exitPreLoader();
    }
  }, [heroReady, localIntroDone]);

  return (
    <div className="preloader gap-[5px] overflow-hidden text-[14px] sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
      <div className="texts-container w-500 flex h-60 items-center justify-center gap-[5px] overflow-hidden text-[14px] font-extrabold text-[#e4ded7] opacity-0 sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
        <span>Developer,</span>
        <span>Designer,</span>
        <span>Dreamer.</span>
        <div className="sub hidden"></div>
      </div>
      {/* Loading Progress Indicator - Only show after intro is done */}
      {localIntroDone && (
        <div className="absolute bottom-40 left-1/2 -translate-x-1/2 text-[#e4ded7] font-mono text-sm opacity-60 animate-pulse">
          Loading... {displayedProgress}%
        </div>
      )}
    </div>
  );
};

export default PreLoader;
