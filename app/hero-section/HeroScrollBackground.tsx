"use client";

import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const HeroScrollBackground = ({ setIsLoaded, setLoadProgress }: { setIsLoaded: (loaded: boolean) => void, setLoadProgress: (progress: number) => void }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    // const [loadProgress, setLoadProgress] = useState(0); 
    const [isInternalLoaded, setIsInternalLoaded] = useState(false);

    // We have 200 frames
    const frameCount = 200;

    const { scrollY } = useScroll(); // Absolute scroll Y in pixels

    // Map scroll pixels 0 -> 3000 (roughly 3-4 screen heights) to frames 1 -> 200
    // Adjust '3000' based on how tall the Hero section is. 
    // If Hero is 400vh, that's roughly 4 * window.innerHeight.
    // We want the animation to finish by the time we scroll past the hero.
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        setWindowHeight(window.innerHeight);
        const handleResize = () => setWindowHeight(window.innerHeight);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalScrollHeight = windowHeight * 3.5; // Slightly less than 400vh to ensure it finishes
    const frameIndex = useTransform(scrollY, [0, totalScrollHeight || 2000], [1, frameCount]);

    // Preload Images
    useEffect(() => {
        let isMounted = true;
        const basePath = "/hero_section_Images";

        // Initialize images array immediately so we can populate it progressively
        const loadedImages: HTMLImageElement[] = new Array(frameCount).fill(null);
        setImages(loadedImages); // Set initial empty array

        const loadImages = async () => {
            // We don't need to await all of them to start showing something.
            // But we do want to track them.
            let loadedCount = 0;

            for (let i = 0; i < frameCount; i++) {
                const img = new Image();
                const index = i + 1;
                const formattedIndex = index.toString().padStart(3, "0");
                const src = `${basePath}/ezgif-frame-${formattedIndex}.jpg`;

                img.src = src;

                img.onload = () => {
                    if (!isMounted) return;
                    loadedImages[i] = img;
                    loadedCount++;
                    setLoadProgress(Math.round((loadedCount / frameCount) * 100));

                    // Wait for ALL images to load before showing the hero
                    if (loadedCount === frameCount) {
                        setIsInternalLoaded(true);
                        setIsLoaded(true);
                    }

                    // Force re-render if it's the current frame (optional optimization)
                };
            }
        };

        loadImages();

        return () => {
            isMounted = false;
        };
    }, [setIsLoaded, setLoadProgress]);

    const renderCanvas = (index: number) => {
        const canvas = canvasRef.current;
        // Allows rendering even if not ALL images are loaded, strictly check if the SPECIFIC image exists
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const width = window.innerWidth;
        const height = window.innerHeight;

        if (canvas.width !== width || canvas.height !== height) {
            canvas.width = width;
            canvas.height = height;
        }

        const rawIndex = Math.floor(index) - 1;
        // Clamp index
        const imageIndex = Math.min(Math.max(rawIndex, 0), frameCount - 1);

        // Check if the image at this index is loaded
        const img = images[imageIndex];

        ctx.clearRect(0, 0, width, height);

        if (img) {
            const scale = Math.max(width / img.width, height / img.height);
            const x = (width / 2) - (img.width / 2) * scale;
            const y = (height / 2) - (img.height / 2) * scale;
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        }
    };

    useMotionValueEvent(frameIndex, "change", (latest) => {
        // Always try to render if we have started
        requestAnimationFrame(() => renderCanvas(latest));
    });

    useEffect(() => {
        // Initial render attempt once we are "loaded" (first frame ready)
        if (isInternalLoaded) {
            renderCanvas(1);
        }
    }, [isInternalLoaded]);

    // Handle resizing
    useEffect(() => {
        const handleResize = () => {
            renderCanvas(frameIndex.get());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [images]); // Depend on images so if new ones load we might theoretically re-render, though the loop handles it

    return (
        <>
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 h-full w-full object-cover"
            />
            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 z-0 bg-[#0E1016]/30 mix-blend-multiply pointer-events-none" />
        </>
    );
};

export default HeroScrollBackground;
