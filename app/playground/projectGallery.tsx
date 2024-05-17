import React from "react";
import ProjectThumbnail from "../_components/projectThumbnail";

interface ProjectGalleryProps {
  selectedOption: string;
  description: string;
  projectData: any;
}


export default function ProjectGallery({
  selectedOption,
  projectData,
  description,
}: ProjectGalleryProps) {
  
  const renderThumbnails = () => {
    return projectData.map((project, index) => (
      <React.Fragment key={index}>
        {/* Pass selectedOption to ProjectThumbnailSmall */}
        <ProjectThumbnail
          projectData={project}
          selectedOption={selectedOption}
        />
      </React.Fragment>
    ));
  };

  // Define grid styles based on selectedOption
  const gridClass = selectedOption === "video" || selectedOption === "web" ? "grid-cols-3" : "grid-cols-3";
  return (
    <div>
      <p className="text-sm pb-5 font-light w-[40rem] leading-6">{description}</p>
      <div className={`grid gap-10 ${gridClass}`}>{renderThumbnails()}</div>
    </div>
  );
}
