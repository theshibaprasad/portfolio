"use client";

import Link from "next/link";
// import Image from "next/image"; 
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import TypingRoles from "../animations/TypingRoles";
// import profile from "../../public/profile.webp";
import HeroScrollBackground from "./HeroScrollBackground"; // Import the new background component


import { useState } from "react";

const Hero = ({ isLoading, setIsLoading, setLoadProgress }: { isLoading: boolean, setIsLoading: (loading: boolean) => void, setLoadProgress: (progress: number) => void }) => {
  return (
    <motion.section
      className="relative h-[400vh] w-full bg-[#0E1016]"
      id="home"
      initial="initial"
      animate={isLoading ? "initial" : "animate"}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* The Scrollytelling Background */}
        <HeroScrollBackground setIsLoaded={setIsLoading} setLoadProgress={setLoadProgress} />

        {/* Existing Content */}
        <div className="relative z-10 h-full w-full">
          <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] mix-blend-color opacity-20"></motion.div>

          <div className="absolute top-16 flex justify-center sm:justify-between sm:w-[90%] lg:max-w-[1440px] left-0 right-0 mx-auto px-4 md:px-0">
            <div>
              <motion.p
                className="hidden text-[#e4ded7] sm:block md:text-[18px] lg:block font-mono"
                variants={bodyAnimation}
              >
                @theshibaprasad
              </motion.p>
            </div>

            <div className="flex gap-10 text-[#e4ded7] sm:gap-12 md:gap-14 lg:gap-14">
              <Link
                href="https://github.com/theshibaprasad/"
                target="_blank"
                aria-label="View GitHub Profile"
              >
                <motion.p
                  className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
                  variants={bodyAnimation}
                >
                  GITHUB
                </motion.p>
              </Link>
              <Link
                href="https://linkedin.com/in/theshibaprasad/"
                target="_blank"
                aria-label="View LinkedIn Profile"
              >
                <motion.p
                  className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
                  variants={bodyAnimation}
                >
                  LINKEDIN
                </motion.p>
              </Link>
              <Link
                href="https://instagram.com/theshibaprasad/"
                target="_blank"
                aria-label="View Instagram Profile"
              >
                <motion.p
                  className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
                  variants={bodyAnimation}
                >
                  INSTAGRAM
                </motion.p>
              </Link>
            </div>
          </div>

          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 w-full flex justify-center">
            <div
              className={`relative w-[95%] lg:max-w-[1440px] flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-center ${monaSans.className}`}
            >
              <div className="translate-y-64 lg:-translate-y-44">
                <AnimatedWords
                  title="SHIBA"
                  style="inline-block overflow-hidden pt-1 -mr-4 lg:-mr-7 xl:-mr-9 -mb-1 lg:-mb-3 xl:-mb-4 text-[#e4ded7]"
                />
              </div>

              <div className="self-end lg:self-auto translate-y-64 lg:translate-y-64">
                <AnimatedWords
                  title="PRASAD"
                  style="inline-block overflow-hidden pt-1 -mr-4 lg:-mr-7 xl:-mr-9 -mb-1 lg:-mb-3 xl:-mb-4 text-[#e4ded7]"
                />
              </div>

              {/* TypingRoles component positioned: Mobile (Center Bottom), Desktop (Left Bottom) */}
              <div className="absolute left-1/2 -translate-x-1/2 md:translate-x-10 lg:left-0 lg:translate-x-10 bottom-[-96px] lg:bottom-[-240px] text-center lg:text-left whitespace-nowrap">
                <motion.div variants={bodyAnimation}>
                  <TypingRoles />
                </motion.div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
