import React from "react";
import SectionHeading from "../_components/sectionHeading";
import { workData, researchWorkData } from "../lib/workData";
import ProjectThumbnail from "../_components/workThumbnail";
import SectionContainer from "../_components/sectionContainer";
import { playFair, poppins } from "../fonts";

export default function Work() {
  return (
    <section className="relative flex flex-col  sm:py-[5rem]">
      <SectionHeading>
        <p className={`${poppins.className}`}>Featured Work</p>
      </SectionHeading>
      <SectionContainer>
        <div>
          {workData.map((project, index) => (
            <React.Fragment key={index}>
              <ProjectThumbnail {...project} />
            </React.Fragment>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
