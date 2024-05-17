import React, { useState, useEffect } from "react";
import SectionContainer from "../_components/sectionContainer";
import ProjectGallery from "./projectGallery";
import { projects } from "../lib/projectData";
import { inter } from "../fonts";

export default function ProjectSection() {
  const [selectedOption, setActiveType] = useState<string>("web");

  const handleTypeClick = (menuOption: string) => {
    setActiveType(menuOption);
  };

  const currentSelectedProjects = projects[selectedOption]["data"];
  const currentDescription = projects[selectedOption]["description"];

  return (
    <SectionContainer>
      <div className="flex mb-7 gap-12">
        {/* Menu Section */}
        {Object.keys(projects).map((menuOption: string) => (
          <button
            key={menuOption}
            className={`group text-indigo-700 transition duration-300 ${inter.className}`}
            onClick={() => handleTypeClick(menuOption)}
          >
            {(projects as any)[menuOption].label}
            <span
              className={`
              block group-hover:max-w-full transition-all duration-200 h-0.5 bg-indigo-700 
              ${selectedOption === menuOption ? "max-w-full" : "max-w-0"}`}
            />
          </button>
        ))}
      </div>
      {/* Gallery Section */}
      <ProjectGallery
        selectedOption={selectedOption}
        projectData={currentSelectedProjects}
        description={currentDescription}
      />
    </SectionContainer>
  );
}
