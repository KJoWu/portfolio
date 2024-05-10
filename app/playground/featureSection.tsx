import React from "react";
import SectionHeading from "../_components/sectionHeading";
import SectionContainer from "../_components/sectionContainer";
import { featuredData } from "../lib/projectData";
import ProjectThumbnail from "../_components/projectThumbnail";

export default function ProjectHighlightSection() {

  return (
    <div
      className={` pt-[7rem] pb-[3rem] bg-cover bg-fixed`}
      style={{ backgroundImage: `url("./a2.png")` }}
    >
      <SectionHeading>
        <h1 className="text-5xl mb-3 px-3 bg-lime-300 w-fit">Playground</h1>
        <p className="bg-white text-2xl w-fit pt-2 px-2">
          Projects Experiments & Ideas
        </p>
        <p className="bg-white text-2xl  w-fit font-light px-2 py-2">
          Here are projects I've worked on, still on the experiemental phase
        </p>
        <p className="bg-white text-sm  w-fit font-light px-2 py-1">
          (note page is still under construction)
        </p>
      </SectionHeading>
      <SectionContainer>
        <div className="grid grid-cols-2 gap-3">
          {featuredData.map((project, index) => (
            <React.Fragment key={index}>
              <ProjectThumbnail
                projectData={project}
                selectedOption={"featured"}
              />            
            </React.Fragment>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
