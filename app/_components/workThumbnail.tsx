import React from "react";
import Image from "next/image";
import { workData } from "../lib/workData";
import { playFair, inter, poppins } from "../fonts";

type WorkThumbnailProps = (typeof workData)[number];

export default function WorkThumbnail({
  title,
  type,
  description,
  imageUrl,
  tags,
  skills,
  bgHover,
  tagsBg,
  bg,
}: WorkThumbnailProps) {
  return (
    <div>
      <section
        className={`group ${bg} sm:h-[25rem] overflow-hidden sm:pr-8 relative 
      sm:flex content-center  mb-5 last:mb-0 hover:bg-[#f2f1fd]
      hover:cursor-pointer transition-all drop-shadow-md`}
      >
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute top-8 -right-[8rem] w-[32rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.05] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2"
        />
      </section>
      <div>
        <h3 className={`text-[24px] font-semibold  ${inter.className}`}>{title}</h3>
        <p className={`text-14 font-light text-sm ${inter.className} leading-relaxed text-gray-500`}>{type}</p>
        <p className={`mt-1 text-16 font-light ${inter.className}  leading-relaxed text-gray-700 `}>
          {description}
        </p>


      </div>
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
  );
}
