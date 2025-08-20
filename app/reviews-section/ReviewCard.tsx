import { reviewProps } from "./reviewDetails";
import Image from "next/image";
import "../globals.css";
import slash from "../../public/review-slash.svg";
import { motion } from "framer-motion";

const BlogCard = ({
  name,
  role,
  company,
  
  testimonial,
  index,
}: reviewProps) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.1 * index,
        ease: [0.44, 0, 0.22, 0.99],
      },
    }}
    viewport={{
      amount: "some",
      once: true,
    }}
      className="relative flex h-[473px] w-[100%] flex-col items-start justify-between rounded-[23px] border-[3px] border-[#212531] bg-transparent p-[28px] sm:h-[450px] sm:items-center sm:justify-start lg:h-[393px] lg:max-w-[438px] "
    >
      <Image
        src={slash}
        alt={"title"}
        className="absolute top-[34px] left-[28px] w-[51px]"
      />

      <p className="mt-10 text-[18px] font-[500] leading-relaxed tracking-wide text-[#e4ded7]">
        {testimonial}
      </p>

      <div className="flex flex-col gap-1 sm:absolute sm:bottom-[28px] sm:left-[28px]">
        <h3 className="text-[23px] font-bold uppercase leading-[20.7px] tracking-[-0.46056px] text-[#e4ded7]">
          {name}
        </h3>
        <p className="text-sm font-[500] leading-[16px] text-[#95979D]">
          {role}{company ? ` @ ${company}` : ''}
        </p>
      </div>
    </motion.div>
  );
};

export default BlogCard;
