import React from "react";
import Image from "next/image";
import { projectsData } from "../lib/projectData";
import { playFair, poppins } from "../fonts";

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
      className={`group ${bg} sm:h-[30rem] overflow-hidden sm:pr-8 even:pr-0 relative 
      sm:flex content-center sm:even:flex-row-reverse mb-5 last:mb-0 hover:bg-[#f2f1fd]
      hover:cursor-pointer transition-all w- drop-shadow-md`}
    >
      <div className="pt-5 pb-12 px-5 sm:pl-16  sm:pt-16 sm:max-w-[55%] flex flex-col h-full ">
        
        <h3 className={`text-3xl font-semibold ${poppins.className} text-[#4229d6]`}>{title}</h3>
        
        <p className="mt-5 text-lg  leading-relaxed text-gray-700">{type}</p>
        <p className="mt-2 text-lg font-light  leading-relaxed text-gray-700 ">
          {description}
        </p>

        <div className="sm:mt-auto">
          <ul className="flex flex-wrap mt-4 gap-3">
            {skills.map((skill, index) => (
              <li
                key={index}
                className={`${tagsBg} px-3 py-1 text-sm tracking-wider text-white rounded-md`}
              >
                {skill}
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap mt-4 gap-3">
            {tags.map((tag, index) => (
              <li
                key={index}
                className={`bg-[#4229d6] px-3 py-1 text-sm tracking-wider text-white rounded-md`}
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
        className="absolute top-8 -right-[8rem] w-[32rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 transition group-hover:scale-[1.05] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:group-hover:translate-x-3"
      />
    </section>
  );
}
