import React from "react";
import SectionHeading from "../_components/sectionHeading";
import { projectsData, researchProjectsData } from "../lib/projectData";
import ProjectThumbnail from "../_components/projectThumbnail";
import ProjectThumbnailSmall from "../_components/projectThumbnailSmall";
import SectionContainer from "../_components/sectionContainer";
import { playFair, poppins } from "../fonts";

export default function projects() {
  return (
    <section className="relative flex flex-col  sm:py-[5rem]">
      <SectionHeading>
        <p className={`${poppins.className}`}>Featured Work</p>
      </SectionHeading>
      <SectionContainer>
        <div>
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <ProjectThumbnail {...project} />
            </React.Fragment>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
