import ProjectCard from "./ProjectCard";
import { devProjects, designProjects, ProjectProps } from "./projectDetails";
import { useState } from "react";

const ProjectGrid = () => {
  // const [filter, setFilter] = useState(true);

  return (
    <>
      {/* <div className="mb-10 flex gap-16 text-[#e4ded7] md:mb-16  lg:mb-20 ">
        <h4
          className={`text-[16px] md:text-[20px] lg:text-[24px] ${
            filter ? "text-[#e4ded7]" : "text-[#e4ded7]/30"
          }`}
          onClick={() => setFilter(true)}
        >
          Development
        </h4>{" "}
        <h4
          className={`text-[16px] md:text-[20px] lg:text-[24px] ${
            filter ? "text-[#e4ded7]/30" : "text-[#e4ded7]"
          }`}
          onClick={() => setFilter(false)}
        >
          Design
        </h4>
      </div> */}

      {/* {filter ? ( */}
      <div className="flex w-[90%] flex-col items-center justify-center gap-y-10 lg:max-w-[1200px]">
        {devProjects.map((project: ProjectProps, index: number) => (
          <div
            key={project.id}
            className="sticky w-full rounded-3xl border border-[#e4ded7]/20 bg-[#212531]"
            style={{
              top: `calc(290px + ${index * 20}px)`,
              zIndex: index + 1,
            }}
          >
            <ProjectCard
              id={project.id}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              image={project.image}
              available={project.available}
              priority={index < 2} // Prioritize first 2 images
            />
          </div>
        ))}
      </div>
      {/* ) : (
        <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-6 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
          {designProjects.map((project: ProjectProps) => (
            <ProjectCard
              id={project.id}
              key={project.id}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              image={project.image}
              bgColor={project.bgColor}
              available={project.available}
            />
          ))}
        </div>
      )} */}
    </>
  );
};

export default ProjectGrid;
