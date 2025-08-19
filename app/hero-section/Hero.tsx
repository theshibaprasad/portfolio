import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import TypingRoles from "../animations/TypingRoles";
import profile from "../../public/profile.webp";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex min-h-screen w-full items-stretch justify-center bg-[url('.//../public/hero.jpg')] bg-cover  bg-center py-0"
      id="home"
      initial="initial"
      animate="animate"
    >
      <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] mix-blend-color"></motion.div>

      <div className="absolute top-16 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
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

      <div className="-mt-36 flex flex-col items-center justify-center sm:-mt-20 lg:my-40 lg:-mt-2 lg:py-40 ">
        <div
          className={`relative flex flex-col items-center justify-center ${monaSans.className}`}
        >
          <AnimatedWords
            title="SHIBA PRASAD"
            style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
          />
          <motion.div
            className="absolute bottom-[-110px] mx-auto sm:bottom-[-100px] md:bottom-[-130px] lg:bottom-[-150px]"
            variants={imageAnimation}
          >
            <Image
              src={profile}
              priority
              alt="Shiba's headshot"
              data-blobity-tooltip="Hello Guys"
              data-blobity-invert="false"
              className=" w-[150px] rounded-[16px] grayscale hover:grayscale-0 md:w-[200px] md:rounded-[32px] lg:w-[245px]"
            />
          </motion.div>
          
          {/* TypingRoles component positioned below profile picture */}
          <motion.div
            className="absolute bottom-[-220px] mx-auto sm:bottom-[-200px] md:bottom-[-220px] lg:bottom-[-240px] text-center"
            variants={bodyAnimation}
          >
            <TypingRoles />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
