// ProjectGallery.tsx
import React from "react";
import ProjectThumbnail from "../_components/projectThumbnail";
import { ProjectData } from "../lib/projectData";
import { SelectedOption } from "../lib/projectData";
import { inter, sourceSerif, TiempoBold, TiempoSemi, poppins } from "../fonts";

interface ProjectGalleryProps {
  selectedOption: SelectedOption;
  description: string;
  projectData: ProjectData[];
}

export default function ProjectGallery({
  selectedOption,
  projectData,
  description,
}: ProjectGalleryProps) {
  
  const renderThumbnails = () => {
    return projectData.map((project, index) => (
      <React.Fragment key={index}>
        <ProjectThumbnail
          projectData={project}
          selectedOption={selectedOption}
        />
      </React.Fragment>
    ));
  };

  const gridClass = selectedOption === "video" || selectedOption === "web" ? "grid-cols-2" : "grid-cols-2";
  return (
    <div>
      <p className={`pb-5  w-[40rem] leading-6 ${poppins.className}`}>{description}</p>
      <div className={`grid gap-10 ${gridClass}`}>{renderThumbnails()}</div>
    </div>
  );
}
