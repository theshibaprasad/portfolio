import { StaticImageData } from "next/image";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: StaticImageData | string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "NexoAi",
    description:
      "GenAI-powered career development platform helping professionals build resumes, prepare for interviews, practice coding tests with intelligent insights and real-time market data.",
    technologies: ["Next.Js","Gemini.AI","MongoDB", "Clerk"],
    github: "https://github.com/theshibaprasad/NexoAI",
    demo: "https://nexo-ai-beta.vercel.app/",
    image: require(".//../../public/projects/NexoAI.png"),
    available: true,
  },
  {
    id: 1,
    name: "Coca-Cola",
    description:
      "A modern, responsive landing page built with Next.js, Three.js, and GSAP, featuring interactive 3D elements like a soda can, smooth animations, and dynamic sections.",
    technologies: ["Next.Js","Three.Js", "Tailwind CSS", "GSAP"],
    github: "https://github.com/theshibaprasad/Coca-Cola_3D_landing",
    demo: "https://coca-cola-3d-landing.vercel.app/",
    image: require(".//../../public/projects/Coca_Cola.png"),
    available: true,
  },
  {
    id: 2,
    name: "FinWise",
    description:
      "FinWise is an AI-driven financial management platform designed to revolutionize how individuals and businesses track, analyze, and optimize their financial health.",
    technologies: ["React", "Gemini.Ai","Twilio", "MongoDB"],
    github: "https://github.com/theshibaprasad/FineWIse",
    demo: "https://finwise-red.vercel.app/",
    image: require(".//../../public/projects/finwise.png"),
    available: true,
  },
  {
    id: 3,
    name: "HireON",
    description:
      "HireOn is a full-stack job portal built with the MERN stack, designed to connect job seekers and recruiters through a modern, scalable platform.",
    technologies: ["React", "Node.Js", "MongoDB","Socket.IO"],
    github: "https://github.com/theshibaprasad/HireOn",
    demo: "https://hireon-74i0.onrender.com/",
    image: require(".//../../public/projects/hireon.png"),
    available: true,
  },
  {
    id: 4,
    name: "ArogyaFly-Drone",
    description:
      "ArogyaFly is an AI-powered semi-autonomous drone for surveillance and emergency response. It detects humans for search and rescue, supports RTL, Battery Safety, and Position Hold for stable and reliable flight.",
    technologies: ["ArduPilot", "Python","Raspberry Pi", "IOT"],
    github: "https://github.com/theshibaprasad/stm32_",
          demo: "https://youtu.be/LPW_qr-TITc?si=1uJ9iBadp4ZlzSjs",
    image: require(".//../../public/projects/drone.png"),
    available: true,
  },
  
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
