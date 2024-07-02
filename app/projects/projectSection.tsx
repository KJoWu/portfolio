import React, { useState } from "react";
import SectionContainer from "../_components/sectionContainer";
import ProjectGallery from "./projectGallery";
import { projects, ProjectType } from "../lib/projectData";
import { poppins, sourceSerif } from "../fonts";

export default function ProjectSection() {
  const [selectedOption, setActiveType] = useState<ProjectType>("web");

  const handleTypeClick = (menuOption: ProjectType) => {
    setActiveType(menuOption);
  };

  const currentSelectedProjects = projects[selectedOption]["data"];
  const currentDescription = projects[selectedOption]["description"];

  return (
    <SectionContainer>
      <div className="flex flex-wrap justify-center mb-2 gap-5 md:flex-nowrap">
        {/* Menu Section */}
        {Object.keys(projects).map((menuOption, index) => (
          <button
            key={menuOption}
            className={`w-[6em] md:w-[17em] group text-black-700 duration-300 leading-9 text-[1.1em] ${poppins.className} ${selectedOption === menuOption ? 'font-semibold text-indigo-600' : 'font-normal'}`}
            onClick={() => handleTypeClick(menuOption as ProjectType)}
            style={{
              display: 'flex',
              justifyContent: 'center', // Center items horizontally
              alignItems: 'center', // Center items vertically
              lineHeight: '1'  // Adjust line-height to keep vertical alignment consistent
            }}
          >
            <div className="leading-7 text-center">
              {/* Text for small screens */}
              <p className="block md:hidden">
                {projects[menuOption as ProjectType].shortLabel}
              </p>

              {/* Text for large screens */}
              <p className="hidden md:block">
                {projects[menuOption as ProjectType].label}
              </p>
            </div>
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
