"use client";
import Link from "next/link";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Hero section is approx 400vh (4 * windowHeight).
      // We want to show navbar when user scrolls past most of it.
      // Let's say when they are 3 screens down.
      const showThreshold = windowHeight * 3;

      // Hide when near footer (e.g., 600px from bottom)
      const isNearFooter = scrollPosition + windowHeight >= documentHeight - 600;

      if (scrollPosition > showThreshold && !isNearFooter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`fixed z-[9999] flex items-center justify-center bg-[#07070a]/90 text-[#e4ded7] backdrop-blur-md transition-all duration-700 ease-out border border-white/10
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
        
        /* Mobile Styles (Bottom Center) */
        bottom-5 left-1/2 flex-row gap-4 rounded-full px-6 py-3 -translate-x-1/2
        ${isVisible ? "translate-y-0" : "translate-y-20"}

        /* Desktop Styles (Left Center Vertical) */
        md:left-5 md:top-1/2 md:bottom-auto md:flex-col md:gap-5 md:px-3 md:py-6 md:translate-x-0 md:-translate-y-1/2
        ${isVisible ? "md:mt-0" : "md:mt-24"}
      `}
    >
      <Link
        href="https://drive.google.com/file/d/11RasUfml4pihACU04u9yJAu1T_cOL7Ns/view"
        target="_blank"
        className="flex items-center justify-center hover:text-white transition-colors"
        aria-label="Open my resume"
        data-blobity-tooltip="View Resume"
        data-blobity-magnetic="false"
      >
        <FontAwesomeIcon
          icon={faFilePdf}
          className="text-[20px] md:mb-2"
        />
      </Link>

      {/* Divider: Vertical on mobile, Horizontal on desktop */}
      <div className="h-4 w-[1px] bg-white/10 mx-1 md:w-full md:h-[1px] md:mx-0 md:my-1"></div>

      {/* MOBILE LINKS (Horizontal, Standard Text) */}
      <div className="flex flex-row gap-4 md:hidden">
        <Link
          href="#home"
          data-blobity-magnetic="false"
          onClick={handleScroll}
          aria-label="Scroll to Home"
          className="hover:text-white transition-colors"
        >
          <h4 className="text-[14px] font-medium whitespace-nowrap">Home</h4>
        </Link>
        <Link
          href="#work"
          data-blobity-magnetic="false"
          onClick={handleScroll}
          aria-label="Scroll to Work"
          className="hover:text-white transition-colors"
        >
          <h4 className="text-[14px] font-medium whitespace-nowrap">Work</h4>
        </Link>
        <Link
          href="#about"
          data-blobity-magnetic="false"
          onClick={handleScroll}
          aria-label="Scroll to About"
          className="hover:text-white transition-colors"
        >
          <h4 className="text-[14px] font-medium whitespace-nowrap">About</h4>
        </Link>
        <Link
          href="#contact"
          data-blobity-magnetic="false"
          onClick={handleScroll}
          aria-label="Scroll to Contact"
          className="hover:text-white transition-colors"
        >
          <h4 className="text-[14px] font-medium whitespace-nowrap">Contact</h4>
        </Link>
      </div>

      {/* DESKTOP LINKS (Vertical, Vertical Text with Forced Style) */}
      <div className="hidden md:flex flex-col gap-5">
        <Link
          href="#home"
          data-blobity-magnetic="false"
          onClick={handleScroll}
          aria-label="Scroll to Home"
          className="hover:text-white transition-colors"
        >
          <h4 className="text-[14px] font-medium vertical-text-fixed">
            Home
          </h4>
        </Link>
        <Link
          href="#work"
          data-blobity-magnetic="false"
          onClick={handleScroll}
          aria-label="Scroll to Work"
          className="hover:text-white transition-colors"
        >
          <h4 className="text-[14px] font-medium vertical-text-fixed">
            Work
          </h4>
        </Link>
        <Link
          href="#about"
          data-blobity-magnetic="false"
          onClick={handleScroll}
          aria-label="Scroll to About"
          className="hover:text-white transition-colors"
        >
          <h4 className="text-[14px] font-medium vertical-text-fixed">
            About
          </h4>
        </Link>
        <Link
          href="#contact"
          data-blobity-magnetic="false"
          onClick={handleScroll}
          aria-label="Scroll to Contact"
          className="hover:text-white transition-colors"
        >
          <h4 className="text-[14px] font-medium vertical-text-fixed">
            Contact
          </h4>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
