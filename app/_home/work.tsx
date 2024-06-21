import React from "react";
import SectionHeading from "../_components/sectionHeading";
import { workData, caseStudyData } from "../lib/workData";
import WorkThumbnail from "../_components/workThumbnail";
import SectionContainer from "../_components/sectionContainer";
import { playFair, poppins } from "../fonts";

export default function Work() {
  return (
    <section className="relative flex flex-col  sm:py-[3rem] bg-[white]">
      <SectionHeading>
        <p className={`${poppins.className}`}>Work Experience + Case Studies</p>
        {/* <p className={`${poppins.className} text-sm text-gray-500 pt-2 font-base tracking-wide`}>Password available upon request</p> */}

      </SectionHeading>
      <SectionContainer>
        <div className="grid grid-cols-2 gap-12">
          {workData.map((project, index) => (
            <React.Fragment key={index}>
              <WorkThumbnail {...project} />
            </React.Fragment>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-12 mt-10">
          {caseStudyData.map((project, index) => (
            <React.Fragment key={index}>
              <WorkThumbnail {...project} />
            </React.Fragment>
          ))}
        </div>
      </SectionContainer>
      <SectionContainer>
          <p className="mt-10"> View more projects here</p>
      </SectionContainer>

    </section>
  );
}
