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

const Hero = () => {
  return (
    <motion.section
      className="relative h-[400vh] w-full bg-[#0E1016]"
      id="home"
      initial="initial"
      animate="animate"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* The Scrollytelling Background */}
        <HeroScrollBackground />

        {/* Existing Content */}
        <div className="relative z-10 h-full w-full">
          <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] mix-blend-color opacity-20"></motion.div>

          <div className="absolute top-16 flex justify-between sm:w-[90%] lg:max-w-[1440px] left-0 right-0 mx-auto px-4 md:px-0">
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
              className={`relative w-[95%] lg:max-w-[1440px] flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center ${monaSans.className}`}
            >
              <div className="translate-y-64 sm:-translate-y-24 md:-translate-y-32 lg:-translate-y-44">
                <AnimatedWords
                  title="SHIBA"
                  style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4 text-[#e4ded7]"
                />
              </div>

              <div className="translate-y-64 sm:translate-y-40 md:translate-y-52 lg:translate-y-64 translate-x-24 sm:translate-x-20">
                <AnimatedWords
                  title="PRASAD"
                  style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4 text-[#e4ded7]"
                />
              </div>

              {/* TypingRoles component positioned: Mobile (Center Bottom), Desktop (Left Bottom) */}
              <div className="absolute left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-10 bottom-[-96px] sm:bottom-[-170px] md:bottom-[-200px] lg:bottom-[-240px] text-center sm:text-left whitespace-nowrap">
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
