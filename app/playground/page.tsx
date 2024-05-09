"use client";
import React, { useState } from "react";
import SectionHeading from "../_components/sectionHeading";
import SectionContainer from "../_components/sectionContainer";
import { researchProjectsData, artProjectsData } from "../lib/projectData";
import ProjectThumbnailSmall from "../_components/projectThumbnailSmall";

const ProjectTypes = {
  video: "Videography",
  graphic: "Illustrations/Graphic Design",
  promo: "Promotional Work",
  other: "Miscellaneous",
};

export default function Playground() {
  const [activeType, setActiveType] = useState<string | null>(null);

  const handleTypeClick = (type: string) => {
    setActiveType(type === activeType ? null : type);
  };
  return (
    <div className="relative">
      <div
        className={` pt-[7rem] pb-[3rem] bg-cover bg-fixed`}
        style={{ backgroundImage: `url("./a2.png")` }}
      >
        <SectionHeading>
          <h1 className="text-5xl mb-3 px-3 bg-lime-300 w-fit">Playground</h1>
          <p className="bg-white text-2xl w-fit pt-2 px-2">Projects Experiments & Ideas</p>
          <p className="bg-white text-2xl  w-fit font-light px-2 py-2">
            Here are projects I've worked on, still on the experiemental phase
          </p>
        </SectionHeading>
        <SectionContainer>
          <div className="grid grid-cols-3 gap-3">
            {researchProjectsData.map((project, index) => (
              <React.Fragment key={index}>
                <ProjectThumbnailSmall {...project} />
              </React.Fragment>
            ))}
          </div>
        </SectionContainer>
      </div>

      <div className="relative bg-white-400 pt-[5rem] pb-[3rem]">
        <SectionContainer>
          <div className="flex gap-5 mb-8">
            {Object.entries(ProjectTypes).map(([type, label]) => (
              <button
                key={type}
                className={`group text-sky-600 transition duration-300 ${
                  activeType === type ? "active" : ""
                }`}
                onClick={() => handleTypeClick(type)}
              >
                {label}
                <span
                  className={`block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-sky-600 ${
                    activeType === type ? "active" : ""
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3">
            {artProjectsData.map((project, index) => (
              <React.Fragment key={index}>
                <ProjectThumbnailSmall {...project} />
              </React.Fragment>
            ))}
          </div>
        </SectionContainer>
      </div>
    </div>
  );
}
