import React from "react";
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center bg-[#0E1016] text-[#e4ded7] gap-5">
      <p className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] uppercase">Oops. You took a wrong turn.</p>
      <Image
        src="/Wrong_path.webp"
        alt="Funny Meme"
        width={858}
        height={483}
        className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]"
      />
      <div>
        <Link href="/" className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] uppercase">
          Head back to my{" "}
          <span className="underline underline-offset-2">Portfolio</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
