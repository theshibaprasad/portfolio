import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { motion } from "framer-motion";
import heartIcon from "../../public/heart icon.png";

const Contact = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[95vh] w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28 3xl:h-[75vh]"
      id="contact"
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
        <div
          className={`flex flex-col items-center justify-center ${monaSans.className} relative w-full sm:items-center lg:max-w-[1440px]`}
        >
          <AnimatedWords2
            title={"Let's Talk"}
            style={
              "flex max-w-[500px] flex-col items-center justify-center text-center text-[150px] font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[170px] md:text-[200px] lg:text-center lg:text-[270px] xl:text-[390px]"
            }
          />
          <Image
            src={heartIcon}
            alt="Heart Icon"
            className="heartbeat absolute -bottom-5 left-32 w-[80px] sm:-bottom-5 sm:left-64 sm:w-[120px] md:-bottom-18 md:left-[40%] md:w-[150px] lg:-bottom-16 lg:left-[42%] lg:w-[230px]"
          />
        </div>

        <div className="mt-16 flex w-full flex-col items-center justify-center gap-12 sm:mt-20 sm:gap-16 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
          <div className="flex w-[280px] max-w-[90%] flex-col items-center text-center text-[12px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
            <AnimatedBody
              text={
                "Got a question, proposal, project, or want to work together on something?"
              }
              className={
                "-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
              }
            />
            <div className="mt-4 flex w-full items-center justify-center gap-1 sm:mt-5 sm:w-[298px] sm:gap-1 md:w-[335px] md:gap-2.5">
              <Link
                href="mailto:theshibaprasad@gmail.com?subject=Lets%20work%20together!&amp;body=Hello%2C%20I%20think%20we%20need%20you%20to%20work%20on%2Fcollaborate%20this%20particular%20product...%20Reach%20out%20as%20soon%20as%20you%20can."
                target="_blank"
                aria-label="Send me an email"
                className="mt-1 w-[200px] text-center underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[190px] md:mt-3 md:w-[200px] lg:mt-4"
              >
                <AnimatedBody
                  text={"Send me an email"}
                  className={"w-full text-center"}
                />
              </Link>
            </div>
          </div>

          <div className="flex gap-6 text-[14px] font-bold text-[#e4ded7] sm:gap-10 sm:text-[16px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
            <Link
              href="https://github.com/theshibaprasad/"
              target="_blank"
              aria-label="View GitHub Profile"
            >
              <AnimatedTitle
                text={"GITHUB"}
                className={
                  "text-[14px] font-bold text-[#e4ded7] sm:text-[16px] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
            <Link
              href="https://linkedin.com/in/theshibaprasad/"
              target="_blank"
              aria-label="View LinkedIn Profile"
            >
              <AnimatedTitle
                text={"LINKEDIN"}
                className={
                  "text-[14px] font-bold text-[#e4ded7] sm:text-[16px] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
            <Link
              href="https://instagram.com/theshibaprasad/"
              target="_blank"
              aria-label="View Instagram Profile"
            >
              <AnimatedTitle
                text={"INSTAGRAM"}
                className={
                  "text-[14px] font-bold text-[#e4ded7] sm:text-[16px] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
