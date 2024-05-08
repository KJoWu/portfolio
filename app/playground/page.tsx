import React from "react";
import SectionHeading from "../_components/sectionHeading";
import SectionContainer from "../_components/sectionContainer";
import { researchProjectsData } from "../lib/projectData";
import ProjectThumbnailSmall from "../_components/projectThumbnailSmall";

export default function Playground() {
  return (
    <div className="relative bg-yellow-200">
      <SectionHeading>
        <h1>Playground</h1>
        <p>Projects Experiments & Ideas</p>
        <span className="pt-7" />

        <SectionContainer>
          <div className="grid grid-cols-2 gap-2">
            {researchProjectsData.map((project, index) => (
              <React.Fragment key={index}>
                <ProjectThumbnailSmall {...project} />
              </React.Fragment>
            ))}
          </div>
        </SectionContainer>
      </SectionHeading>
    </div>
  );
}
