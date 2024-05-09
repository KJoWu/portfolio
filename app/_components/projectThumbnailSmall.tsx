import React from "react";
import Image from "next/image";
import { videoData } from "../lib/projectData";
import { playFair, poppins } from "../fonts";
import YouTubeEmbed from "./video";

type ProjectThumbnailSmallProps = (typeof videoData)[number];

export default function ProjectThumbnailSmall({
  title,
  description,
  url
}: ProjectThumbnailSmallProps) {
  return (
    <div className="pb-5">
      <div className={`sm:h-[20rem] overflow-hidden relative`}>
        <div className="container mx-auto mt-1">
          <YouTubeEmbed url={url} />
        </div>
      </div>
      <h3
        className={`text-lg font-semibold p-2 ${poppins.className} text-gray-900 bg-lime-300 w-fit  mt-[0rem]`}
      >
        {title}
      </h3>

      <p className="pt-2 text-md font-light text-md leading-relaxed text-gray-700">
        {description}
      </p>
    </div>
  );
}
