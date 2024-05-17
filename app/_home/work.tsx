import React from "react";
import SectionHeading from "../_components/sectionHeading";
import { workData, researchWorkData } from "../lib/workData";
import WorkThumbnail from "../_components/workThumbnail";
import SectionContainer from "../_components/sectionContainer";
import { playFair, poppins } from "../fonts";

export default function Work() {
  return (
    <section className="relative flex flex-col  sm:py-[5rem] bg-[white]">
      <SectionHeading>
        <p className={`${poppins.className}`}>Professional Work</p>
      </SectionHeading>
      <SectionContainer>
        <div className="grid grid-cols-2 gap-12">
          {workData.map((project, index) => (
            <React.Fragment key={index}>
              <WorkThumbnail {...project} />
            </React.Fragment>
          ))}
        </div>
      </SectionContainer>
      <SectionHeading>
        <p className={`${poppins.className} mt-16`}>Case Study</p>
      </SectionHeading>
      {/* <SectionContainer>
        <div className="grid grid-cols-2 gap-12">
          {workData.map((project, index) => (
            <React.Fragment key={index}>
              <WorkThumbnail {...project} />
            </React.Fragment>
          ))}
        </div>
      </SectionContainer> */}
    </section>
  );
}
