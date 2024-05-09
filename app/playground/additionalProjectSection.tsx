import React, { useState } from "react";
import SectionContainer from "../_components/sectionContainer";
import { featuredData, videoData } from "../lib/projectData";

interface ProjectTypeData {
  label: string;
  data: any; // You can replace 'any' with the appropriate type for 'data'
}

interface ProjectType {
  [key: string]: ProjectTypeData;
}

const ProjectType: ProjectType = {
  video: {
    label: "Videography",
    data: featuredData,
  },
  web: {
    label: "Desktop & Mobile Apps",
    data: featuredData,
  },
  graphic: {
    label: "Graphic Design",
    data: featuredData,
  },
  research: {
    label: "Research",
    data: featuredData,
  },
  editorials: {
    label: "Editorials",
    data: featuredData,
  },
  traditional: {
    label: "Traditional",
    data: featuredData,
  },
};

export default function AdditionalProjectSection() {
  const [activeType, setActiveType] = useState<string | null>(null);

  const handleTypeClick = (type: string) => {
    setActiveType(type === activeType ? null : type);
  };
  return (
    <SectionContainer>
      <div className="flex mb-8 justify-between">
        {Object.keys(ProjectType).map((type: string) => (
          <button
            key={type}
            className={`group text-indigo-700 transition duration-300`}
            onClick={() => handleTypeClick(type)}
          >
            {ProjectType[type].label}
            <span
              className={`
              block group-hover:max-w-full transition-all duration-200 h-0.5 bg-indigo-700
              ${activeType === type ? "max-w-full" : "max-w-0"}`}
            />
          </button>
        ))}
      </div>
      

      {/* 
    <div className="grid grid-cols-2 gap-10">
      {videoData.map((project, index) => (
        <React.Fragment key={index}>
          <ProjectThumbnailSmall {...project} />
        </React.Fragment>
      ))}
    </div> */}
    </SectionContainer>
  );
}
