import React from "react";
import ProjectThumbnail from "../_components/projectThumbnail";
import { ProjectData } from "../lib/projectData";
import { SelectedOption } from "../lib/projectData";
import { poppins } from "../fonts";
import { motion } from "framer-motion";

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
      <motion.div
        key={description} 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          delay: 0.5,
          duration: 0.9,
        }}
      >
        <p className={`pb-5 w-[40rem] leading-7 text-gray-800 mt-10 mb-5 ${poppins.className}`}>{description}</p>
      </motion.div>

      <div className={`grid gap-10 ${gridClass}`}>{renderThumbnails()}</div>
    </div>
  );
}
