import React from "react";
import SectionHeading from "../_components/sectionHeading";
import { workData, caseStudyData } from "../lib/workData";
import WorkThumbnail from "../_components/workThumbnail";
import SectionContainer from "../_components/sectionContainer";
import { TiempoSemi } from "../fonts";

import Link from 'next/link'


export default function Work() {
  return (
    <section className="relative flex flex-col md:py-[3rem] pb-10">
      <SectionHeading>
        <p className={`${TiempoSemi.className} text-3xl`} >Selected Work Experience + Case Studies</p>
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
        <Link className="mt-10 mb-10 ${poppins.className} font-medium tracking-wide text-indigo-600 text-lg" href="/projects">View more projects here</Link>
      </SectionContainer>

    </section>
  );
}
