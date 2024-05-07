import React from "react";
import Image from "next/image";
import { projectsData } from "../lib/projectData";

type ProjectThumbnailProps = (typeof projectsData)[number];

export default function ProjectThumbnail({
  title,
  type,
  description,
  imageUrl,
  tags,
  skills,
  bgHover,
  tagsBg,
  bg,
}: ProjectThumbnailProps) {

  return (
    <section
      className={`group ${bg} sm:h-[30rem] overflow-hidden 
        sm:pr-8 even:pr-0 relative sm:flex content-center sm:even:flex-row-reverse mb-5 last:mb-0
       ${bgHover} hover:cursor-pointer  transition-all w- drop-shadow-md`}
    >
      <div className="pt-5 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full ">
        <h3 className="text-2xl">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{type}</p>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>

        <div className=" sm:mt-auto">
          <ul className="flex flex-wrap mt-4 gap-2">
            {skills.map((skill, index, bg) => (
              <li
                key={index}
                className={`${tagsBg} px-3 py-1 text-sm tracking-wider text-white rounded-md`}
              >
                {skill}
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                key={index}
                className={`${tagsBg} px-3 py-1 text-sm tracking-wider text-white rounded-md`}
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
        className="absolute top-8 -right-40 w-[32rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40
        transition
        group-hover:scale-[1.05]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        group-even:group-hover:translate-x-3"
      />
    </section>
  );
}
