import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <div
          className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
        >
          <AnimatedWords2
            title={"ABOUT ME"}
            style={`flex max-w-[500px] flex-col items-start text-left pr-5 ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,14vw,155.04px)]`}
          />
          <AnimatedBody
            text="Discover the person behind the pixels and code."
            className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
          />
        </div>
        <AnimatedTitle
          text={
            "I MAKE BRANDS BEAUTIFUL, WEBSITES POWERFUL AND CONTENT CAPTIVATING."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">

            {/* Education Timeline */}
            <div className="relative">
              <div className="mb-8">
                <h3 className="text-4xl font-bold text-[#e4ded7]">EDUCATION</h3>
              </div>

              {/* Timeline */}
              <div className="relative pl-8">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-1 bg-white"></div>

                {/* First Education Entry */}
                <div className="relative mb-8">
                  <div className="absolute left-[-1.4rem] top-2 w-4 h-4 bg-white rounded-full border-2 border-white/80 shadow-lg shadow-white/20"></div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-[#e4ded7] mb-2">
                      <a
                        href="https://www.giet.edu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
                      >
                        Gandhi Institute Of Engineering And Technology University, Gunupur (India)
                      </a>
                    </h4>
                    <p className="text-[#e4ded7] font-semibold mb-1">2022 - 2026</p>
                    <p className="text-[#e4ded7] text-lg mb-1">Bachelor of Technology (B. Tech || Computer Science)</p>
                    <p className="text-[#e4ded7] text-base opacity-90">CGPA: 8.3/10</p>
                  </div>
                </div>

                {/* Second Education Entry */}
                <div className="relative">
                  <div className="absolute left-[-1.4rem] top-2 w-4 h-4 bg-white rounded-full border-2 border-white/80 shadow-lg shadow-white/20"></div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-[#e4ded7] mb-2">
                      <a
                        href="https://ngrautocol.ac.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
                      >
                        Nayagarh Autonomous College, Nayagarh (India)
                      </a>
                    </h4>
                    <p className="text-[#e4ded7] font-semibold mb-1">2019 - 2021</p>
                    <p className="text-[#e4ded7] text-lg mb-1">Intermediate (Science)</p>
                    <p className="text-[#e4ded7] text-base opacity-90">Percentage: 85.67%</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Frontend Development"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "React.js, Next.js, Redux / Context API, Tailwind CSS, Material UI, Shadcn UI, Framer Motion, HTML5, CSS, Vite"
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Backend Technologies"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Express.js, Ruby on Rails, RESTful APIs, MongoDB, MySQL, JWT, Git & GitHub, Deployment (Vercel, Render)"
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"AI, Programming Languages & Other Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "C++, Python, JavaScript (ES6+), Ruby, SQL, Gemini AI, Generative AI, Debugging, UAV Systems (ArduPilot), IoT"
                }
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
          <SongCarousel />
          <AnimatedBody
            text="A few songs I can recommend if you're looking for some fresh tunes :)"
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
