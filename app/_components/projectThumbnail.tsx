import React from "react";
import Image from "next/image";
import { playFair, poppins } from "../fonts";
import YouTubeEmbed from "./video";

type SelectedOption =
  | "video"
  | "web"
  | "graphic"
  | "research"
  | "editorials"
  | "traditional";

interface ProjectData {
  title: string;
  description: string;
  url: string;
  contain:boolean;
}

interface ProjectThumbnailProps {
  projectData: ProjectData;
  selectedOption: SelectedOption;
}

export default function ProjectThumbnail({
  projectData,
  selectedOption,
}: ProjectThumbnailProps) {
  const { title, url, description, contain } = projectData;
  const containTag = typeof projectData.contain !== 'undefined'? "object-contain" : "object-cover";

  console.log(containTag)
  if (selectedOption === "video") {
    return (
      <div>
        <div className={`sm:h-[20rem] overflow-hidden relative`}>
          <div className="container mx-auto mt-1">
            <YouTubeEmbed url={url} />
          </div>
        </div>
        <div className="text-gray-900 mt-3">
        {/* <div className="bg-slate-200 text-gray-900 p-5"> */}
          <h3 className={`text-md font-medium  w-fit`}>
            {title}
          </h3>
          <p className="pt-1 text-gray-500 font-light text-sm leading-relaxed ">
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <Image
        src={url}
        alt={title}
        quality={95}
        className={`${containTag} sm:h-[20rem] bg-black`}
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-30 bg-gray-950 bg-opacity-80 group-hover:opacity-100 text-center">
        <div className="text-white p-5">
          <h3 className="text-2xl font-medium">{title}</h3>
          <p className="text-sm pt-3 leading-6 font-thin">{description}</p>
        </div>
      </div>
    </div>
  );
}
