import React from "react";
import Image from "next/image";
import { researchProjectsData } from "../lib/projectData";

type ProjectThumbnailSmallProps = (typeof researchProjectsData)[number];

export default function ProjectThumbnailSmall({
  title,
  type,
  description,
  imageUrl,
  tags,
  skills,
  bg,
  bgHover,
  tagsBg,
}: ProjectThumbnailSmallProps) {
  const backdrop = `${bg}-50`
  return (
    <section
      className={`group ${backdrop} sm:h-[30rem] overflow-hidden 
    sm:pr-8 relative sm:flex content-center mb-5 last:mb-0
        hover:bg-gray-200 hover:cursor-pointer  transition-all w-full`}
    >
      <div className="pt-5 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full ">
        <h3 className="text-2xl">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{type}</p>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>

        <div className=" sm:mt-auto">
          <ul className="flex flex-wrap mt-4 gap-2">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-sm tracking-wider text-white rounded-full"
              >
                {skill}
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-red-500 px-3 py-1 text-sm tracking-wider text-white rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        quality={95}
        className="absolute top-[8rem] -left-[-15rem] w-[32rem] rounded-t-lg shadow-2xl 
        transition
        group-hover:scale-[1.05]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2"
      />
    </section>
  );
}
