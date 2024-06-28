import React, { useState } from "react";
import SectionContainer from "../_components/sectionContainer";
import ProjectGallery from "./projectGallery";
import { projects, ProjectType } from "../lib/projectData";
import { poppins } from "../fonts";

export default function ProjectSection() {
  const [selectedOption, setActiveType] = useState<ProjectType>("web");

  const handleTypeClick = (menuOption: ProjectType) => {
    setActiveType(menuOption);
  };

  const currentSelectedProjects = projects[selectedOption]["data"];
  const currentDescription = projects[selectedOption]["description"];

  return (
    <SectionContainer>
      <div className="flex mb-7 gap-12">
        {/* Menu Section */}
        {Object.keys(projects).map((menuOption) => (
          <button
            key={menuOption}
            className={`group text-indigo-700  duration-300 ${poppins.className}`}
            onClick={() => handleTypeClick(menuOption as ProjectType)}
          >
            {projects[menuOption as ProjectType].label}

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
