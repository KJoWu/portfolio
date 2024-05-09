import React from "react";
import Image from "next/image";
import { artProjectsData } from "../lib/projectData";
import { playFair, poppins } from "../fonts";

type ProjectThumbnailSmallProps = (typeof artProjectsData)[number];

export default function ProjectThumbnailSmall({
  title,
  type,
  description,
  imageUrl,
  tags,
  skills,
  bgHover,
  tagsBg,
  bg,
}: ProjectThumbnailSmallProps) {
  return (
    <div>
      <section className={`sm:h-[30rem] overflow-hidden relative`}>
        <div className="w-[full] h-[20rem] overflow-hidden  bg-black`">
          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            className="object-cover"
          />
        </div>

        <h3
          className={`text-lg font-semibold pt-5 ${poppins.className} text-gray-900]`}
        >
          {title}
        </h3>

        <p className="pt-1 text-md font-light text-sm leading-relaxed text-gray-700">
          {description}
        </p>
      </section>
    </div>
  );
}
