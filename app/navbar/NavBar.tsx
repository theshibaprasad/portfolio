"use client";
import Link from "next/link";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Wait for page to fully load before showing navigation
    const timer = setTimeout(() => {
      setIsLoaded(true);
      // Add a small delay for the slide-up animation
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    }, 6000); // 6 seconds to match loader duration

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Hide navigation when near footer (within 200px of bottom)
      const isNearFooter = scrollPosition + windowHeight >= documentHeight - 200;
      setIsVisible(!isNearFooter);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoaded]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Don't render anything until loaded
  if (!isLoaded) {
    return null;
  }

  return (
    <nav 
      className={`fixed bottom-10 left-0 right-0 z-[9999] my-0 mx-auto flex w-[306px] items-center justify-center gap-1 rounded-lg bg-[#07070a]/90 px-1 py-1 text-[#e4ded7] backdrop-blur-md transition-all duration-700 ease-out sm:w-[383.3px] md:p-2 lg:w-[391.3px] ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
      }`}
    >
      <Link
        href="https://drive.google.com/file/d/11RasUfml4pihACU04u9yJAu1T_cOL7Ns/view"
        target="_blank"
        className="flex"
        aria-label="Open my resume"
        data-blobity-tooltip="View Resume"
        data-blobity-magnetic="false"
      >
        <FontAwesomeIcon
          icon={faFilePdf}
          className="py-2 px-2 text-[16px] sm:px-4 md:py-1"
        />
      </Link>

      <Link
        href="#home"
        data-blobity-magnetic="false"
        onClick={handleScroll}
        aria-label="Scroll to Home Section"
      >
        <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">
          Home
        </h4>
      </Link>
      <Link
        href="#work"
        data-blobity-magnetic="false"
        onClick={handleScroll}
        aria-label="Scroll to Work Section"
      >
        <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">
          Work
        </h4>
      </Link>

      <Link
        href="#about"
        data-blobity-magnetic="false"
        onClick={handleScroll}
        aria-label="Scroll to About Section"
      >
        <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">
          About
        </h4>
      </Link>

      <Link
        href="#contact"
        data-blobity-magnetic="false"
        onClick={handleScroll}
        aria-label="Scroll to Contact Section"
      >
        <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">
          Contact
        </h4>
      </Link>
    </nav>
  );
};

export default NavBar;
