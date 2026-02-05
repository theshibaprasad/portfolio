"use client";

import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const HeroScrollBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loadProgress, setLoadProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    // We have 200 frames
    const frameCount = 200;

    // We use user scroll on the WINDOW or a parent container? 
    // Since this component will be inside a tall sticky container in Hero.tsx, 
    // we can use the window scroll or a specific ref passed down.
    // Actually, standard useScroll() tracks the viewport scroll by default if no target is set.
    // BUT, we want it to map to the scroll of the PARENT section.
    // Let's rely on the parent container (Hero.tsx section) and use absolute window scroll? 
    // No, easiest is to just track window scroll progress over the initial viewport height * 4

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

        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = new Array(frameCount).fill(null);
            let loadedCount = 0;

            const imagePromises = Array.from({ length: frameCount }, (_, i) => {
                return new Promise<void>((resolve) => {
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
                        resolve();
                    };

                    img.onerror = () => {
                        console.warn(`Failed to load: ${src}`);
                        resolve();
                    };
                });
            });

            await Promise.all(imagePromises);

            if (isMounted) {
                setImages(loadedImages);
                setIsLoaded(true);
            }
        };

        loadImages();

        return () => {
            isMounted = false;
        };
    }, []);

    const renderCanvas = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const width = window.innerWidth;
        const height = window.innerHeight;

        if (canvas.width !== width || canvas.height !== height) {
            canvas.width = width;
            canvas.height = height;
        }

        const rawIndex = Math.floor(index) - 1;
        const imageIndex = Math.min(Math.max(rawIndex, 0), images.length - 1);
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
        if (isLoaded) {
            requestAnimationFrame(() => renderCanvas(latest));
        }
    });

    useEffect(() => {
        if (isLoaded) {
            renderCanvas(1);
        }
    }, [isLoaded]);

    // Handle resizing
    useEffect(() => {
        const handleResize = () => {
            if (isLoaded) renderCanvas(frameIndex.get());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded, frameIndex]);

    return (
        <>
            {!isLoaded && (
                <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#0E1016]">
                    <div className="text-[#e4ded7] font-mono">Loading... {loadProgress}%</div>
                </div>
            )}
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
