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
        <h1 className="text-3xl">Playground</h1>

        <p className=" text-lg  w-fit font-light pt-3  pb-2 w-[30rem]">
          In addition to software developement, I've also worked as a videographer and a graphic designer  
        </p>
      </SectionHeading>
      </div>
  );
}
