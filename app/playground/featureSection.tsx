import React from "react";
import SectionHeading from "../_components/sectionHeading";
import {  TiempoSemi } from "../fonts";

export default function ProjectHighlightSection() {

  return (
    <div
      className={`bg-white pt-[5rem] pb-[1rem]`}
      // style={{ backgroundImage: `url("./a2.png")` }}
    >
      <SectionHeading>
        <h1 className={`text-5xl  ${TiempoSemi.className}`}>Playground</h1>

      </SectionHeading>
      </div>
  );
}
