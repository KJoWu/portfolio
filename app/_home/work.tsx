import React from "react";
import SectionHeading from "../_components/sectionHeading";
import { workData, caseStudyData } from "../lib/workData";
import WorkThumbnail from "../_components/workThumbnail";
import SectionContainer from "../_components/sectionContainer";
import { TiempoBold } from "../fonts";

import Link from 'next/link'


export default function Work() {
  return (
    <section className="relative flex flex-col sm:py-[3rem] bg-[white]">
      <SectionHeading>
        <p className={`${TiempoBold.className} text-3xl pb-10`} >Selected Work Experience + Case Studies</p>
        {/* <p className={`${poppins.className} text-sm text-gray-500 pt-2 font-base tracking-wide`}>Password available upon request</p> */}

      </SectionHeading>

      <SectionContainer>
        <div className="grid  gap-12">
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
      <Link className="t-10 ${poppins.className} font-medium tracking-wide text-[#4229d6] font-base text-sm " href="/playground">View more projects here</Link>
      </SectionContainer>

    </section>
  );
}
