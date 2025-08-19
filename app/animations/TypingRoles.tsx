import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TypingRoles: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [characters, setCharacters] = useState<Array<{char: string, id: number}>>([]);
  const [nextId, setNextId] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const roles = [
    "MERN STACK DEVELOPER",
    "FULLSTACK DEVELOPER", 
    "FRONTEND DEVELOPER",
    "DRONE DEVELOPER",
    "GENAI DEVELOPER",
    "CLOUD ENGINEER"
  ];

  useEffect(() => {
    if (inView) {
      ctrls.start("animate");
      // Delay the start of typing animation to match hero sequence
      const typingDelay = setTimeout(() => {
        setStartTyping(true);
      }, 6500); // 4 seconds delay to appear after name + profile picture
      return () => clearTimeout(typingDelay);
    }
    if (!inView) {
      ctrls.start("initial");
    }
  }, [ctrls, inView]);

  useEffect(() => {
    if (!startTyping) return; // Don't start typing until delay is complete
    
    const currentRole = roles[currentRoleIndex];
    
    if (!isDeleting) {
      // Typing effect
      if (displayText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          const newChar = currentRole[displayText.length];
          setDisplayText(currentRole.slice(0, displayText.length + 1));
          setCharacters(prev => [...prev, { char: newChar, id: nextId }]);
          setNextId(prev => prev + 1);
        }, 150);
        return () => clearTimeout(timeout);
      } else {
        // Wait before starting to delete
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (characters.length > 0) {
        const timeout = setTimeout(() => {
          setCharacters(prev => prev.slice(0, -1));
          setDisplayText(prev => prev.slice(0, -1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        // Move to next role after deletion is complete
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setDisplayText(""); // Reset displayText for new role
        setCharacters([]); // Reset characters array
      }
    }
  }, [displayText, currentRoleIndex, isDeleting, roles, characters.length, nextId, startTyping]);

  const containerAnimation = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
        duration: 1,
      },
    },
  };

  const textAnimation = {
    initial: {
      scale: 0.3,
      opacity: 0,
      letterSpacing: "0.5em",
    },
    animate: {
      scale: 1,
      opacity: 1,
      letterSpacing: "0em",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      scale: 0.3,
      opacity: 0,
      letterSpacing: "0.5em",
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  const characterAnimation = {
    initial: { 
      scale: 0.8, 
      opacity: 0,
      y: 10,
      filter: "blur(2px)"
    },
    animate: { 
      scale: 1, 
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: { 
      scale: 1, 
      opacity: 0,
      y: -5,
      filter: "blur(1px)",
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={ctrls}
      variants={containerAnimation}
      className="text-center flex flex-col items-center justify-center"
    >
      <div 
        className="relative overflow-visible py-2"
        style={{ minHeight: "1.4em" }}
      >
        <motion.h2 
          className="text-[24px] font-bold text-[#e4ded7] sm:text-[32px] md:text-[40px] lg:text-[48px]"
          initial="initial"
          animate="animate"
          variants={textAnimation}
        >
          <AnimatePresence>
            {characters.map((charObj) => (
              <motion.span
                key={charObj.id}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={characterAnimation}
                style={{ display: 'inline-block' }}
                className="transform-gpu"
              >
                {charObj.char === ' ' ? '\u00A0' : charObj.char}
              </motion.span>
            ))}
          </AnimatePresence>
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default TypingRoles;
