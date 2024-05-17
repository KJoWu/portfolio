import React from "react";
import SectionHeading from "../_components/sectionHeading";
import SectionContainer from "../_components/sectionContainer";
import { featuredData } from "../lib/projectData";
import ProjectThumbnail from "../_components/projectThumbnail";

export default function ProjectHighlightSection() {

  return (
    <div
      className={`bg-white pt-[5rem] pb-[1rem]`}
      // style={{ backgroundImage: `url("./a2.png")` }}
    >
      <SectionHeading>
        <h1 className="text-3xl px-3 -fit">Playground</h1>

        <p className=" text-xl  w-fit font-light px-2 pt-3  pb-2">
          Projects I've worked on, still on the experiemental phase
        </p>
      </SectionHeading>
      </div>
  );
}
