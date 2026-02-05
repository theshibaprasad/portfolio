import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  github,
  demo,
  image,
  available,
  priority = false, // Default to false
}: ProjectProps & { priority?: boolean }) => {
  return (
    <motion.div
      style={{
        backgroundColor: "#212531",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        position: "relative",
      } as React.CSSProperties}
      className={`relative z-10 h-[400px] w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 sm:h-[550px] md:h-[650px] lg:h-[500px]`}
      initial="initial"
      animate="animate"
    >
      <div
        className={`absolute bottom-0 ${id % 2 === 0 ? "right-0" : "left-0"} w-[65%] sm:w-[70%] md:w-[60%] lg:max-w-[55%]`}
      >
        <Image
          src={image}
          alt={name}
          width={500}
          height={300}
          className="w-full h-auto object-contain rounded-3xl"
          sizes="(max-width: 640px) 65vw, (max-width: 768px) 60vw, 55vw"
          priority={priority}
        />
      </div>
      <div
        className={`absolute top-0 text-[#0E1016] ${id % 2 === 0 ? "left-0 ml-4 sm:ml-8 lg:ml-14" : "right-0 mr-4 sm:mr-8 lg:mr-14"
          } mt-4 flex items-center justify-center gap-3 sm:gap-4 lg:mt-10`}
      >
        {available ? (
          <>
            <Link
              href={github}
              target="_blank"
              className="rounded-full"
              aria-label="Open GitHub Repository"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="w-[16px] rounded-full bg-white p-3 text-[16px] sm:w-[20px] sm:p-5 sm:text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="true"
              />
            </Link>
            <Link href={demo} target="_blank" aria-label="Open Live Demo">
              <FontAwesomeIcon
                icon={faLink}
                className="w-[16px] rounded-full bg-white p-3 text-[16px] sm:w-[20px] sm:p-5 sm:text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="true"
              />
            </Link>
          </>
        ) : (
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <Link
              href={github}
              target="_blank"
              className="mt-1 rounded-full"
              aria-label="Open GitHub Repository"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="w-[16px] rounded-full bg-white p-3 text-[16px] sm:w-[20px] sm:p-5 sm:text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                data-blobity
                data-blobity-radius="38"
                data-blobity-offset-x="4"
                data-blobity-offset-y="4"
                data-blobity-magnetic="true"
              />
            </Link>
            <div className="rounded-xl bg-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-3 lg:px-6 lg:py-4">
              <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
                Coming soon
              </h3>
            </div>
          </div>
        )}
      </div>
      <div
        className={`absolute text-white ${!(id % 2 === 0)
            ? "right-0 top-16 mr-0 ml-6 sm:top-24 sm:ml-10 md:right-0 md:ml-0 md:top-28 lg:right-0 lg:top-48 lg:mr-4"
            : "left-6 top-16 ml-0 sm:left-10 sm:top-24 md:mr-12 md:top-28 lg:top-44 lg:ml-4"
          } mb-6 sm:mb-10 md:mb-16 lg:mb-14`}
      >
        <AnimatedTitle
          text={name}
          className={
            "max-w-[85%] text-[28px] leading-none text-white sm:max-w-[90%] sm:text-[40px] md:text-[44px] lg:max-w-[450px] lg:text-[48px]"
          }
          wordSpace={"mr-[0.25em]"}
          charSpace={"-mr-[0.01em]"}
        />
        <AnimatedBody
          text={description}
          className={
            "mt-3 w-[85%] max-w-[300px] text-[14px] font-semibold text-[#95979D] sm:mt-4 sm:w-[90%] sm:max-w-[457px] sm:text-[16px]"
          }
        />
        <div className="mt-6 flex flex-wrap gap-2 sm:mt-9 sm:gap-4">
          {technologies.map((tech, id) => (
            <AnimatedTitle
              text={tech}
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
              key={id}
              className={
                "text-[12px] font-bold uppercase sm:text-[14px] md:text-[16px] lg:text-[18px]"
              }
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
