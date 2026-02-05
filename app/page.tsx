"use client";
import Hero from "./hero-section/Hero";
import useBlobity from "blobity/lib/react/useBlobity";
import { useState, useEffect } from "react";
import { ScrollerMotion } from "scroller-motion";
import PreLoader from "./animations/PreLoader/PreLoader";
import { initialBlobityOptions } from "./utils/BlobityConfig";
import NavBar from "./navbar/NavBar";

import dynamic from "next/dynamic";
import Reviews from "./reviews-section/ReviewGrid";
const Work = dynamic(() => import("./work-section/Work"));
const About = dynamic(() => import("./about-section/About"));
const Contact = dynamic(() => import("./contact-section/Contact"));
const Footer = dynamic(() => import("./footer/Footer"));

export default function Home() {
  const blobityInstance = useBlobity(initialBlobityOptions);
  const [heroReady, setHeroReady] = useState(false); // false means NOT ready (loading)
  const [loadProgress, setLoadProgress] = useState(0);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    if (blobityInstance.current) {
      // @ts-ignore for debugging purposes or playing around
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <>
      <PreLoader heroReady={heroReady} loadProgress={loadProgress} setIntroDone={setIntroDone} />

      {/* <ScrollerMotion> */}
      <main className="flex flex-col items-center justify-center">
        <NavBar />
        <Hero isLoading={!heroReady || !introDone} setIsLoading={setHeroReady} setLoadProgress={setLoadProgress} />

        {/* Defer loading of non-critical sections until Hero is ready to ensure image loading priority */}
        {heroReady && (
          <>
            <Work />
            <Reviews />
            <About />
            <Contact />
            <Footer />
          </>
        )}
      </main>
      {/* </ScrollerMotion> */}
    </>
  );
}
