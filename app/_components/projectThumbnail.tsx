// ProjectThumbnail.tsx
import React from "react";
import Image from "next/image";
import YouTubeEmbed from "./video";
import { ProjectData, SelectedOption } from "../lib/projectData";

interface ProjectThumbnailProps {
  projectData: ProjectData;
  selectedOption: SelectedOption;
}

export default function ProjectThumbnail({
  projectData,
  selectedOption,
}: ProjectThumbnailProps) {
  const { title, url, description, contain } = projectData;
  const containTag = contain ? "object-contain" : "object-cover";

  if (selectedOption === "video") {
    if (typeof url === 'string') {
      return (
        <div>
          <div className={`sm:h-[20rem] overflow-hidden relative`}>
            <div className="container mx-auto mt-1">
              <YouTubeEmbed url={url} />
            </div>
          </div>
          <div className="text-gray-900 mt-3">
            <h3 className={`text-md font-semibold w-fit`}>{title}</h3>
            <p className="pt-1 text-gray-500 font-base text-sm leading-relaxed ">
              {description}
            </p>
          </div>
        </div>
      );
    } else {
      console.error("Invalid URL type for video");
      return null;
    }
  }

  return (
    <div className="relative group">
      {typeof url === 'string' ? (
        <Image
          src={url}
          alt={title}
          quality={95}
          className={`${containTag} sm:h-[20rem] bg-black`}
        />
      ) : (
        <Image
          src={url}
          alt={title}
          quality={95}
          className={`${containTag} sm:h-[20rem] bg-black`}
        />
      )}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-gray-950 bg-opacity-80 group-hover:opacity-100 text-center">
        <div className="text-white p-5">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-sm pt-3 leading-6 font-thin">{description}</p>
        </div>
      </div>
    </div>
  );
}
