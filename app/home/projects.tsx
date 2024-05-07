import React from "react";
import SectionHeading from "../components/sectionHeading";
import { projectsData, researchProjectsData } from "../lib/projectData";
import ProjectThumbnail from "../components/projectThumbnail";
import ProjectThumbnailSmall from "../components/projectThumbnailSmall";
import SectionContainer from "../components/sectionContainer";

export default function projects() {
  return (
    <section className="relative flex flex-col  sm:py-[5rem] bg-white">
      <SectionHeading>Selected Projects</SectionHeading>
      <SectionContainer>
        <div>
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <ProjectThumbnail {...project} />
            </React.Fragment>
          ))}
        </div>
      </SectionContainer>

      <SectionHeading><p className="pt-16 mb-[-1rem]">Research Work</p></SectionHeading>

      <SectionContainer>
        <div className="grid grid-cols-2 gap-2">
          {researchProjectsData.map((project, index) => (
            <React.Fragment key={index}>
              <ProjectThumbnailSmall {...project} />
            </React.Fragment>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
