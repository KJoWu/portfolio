import React from "react";
import Image from "next/image";
import { workData } from "../lib/workData";
import { playFair, inter, poppins } from "../fonts";

type WorkThumbnailProps = (typeof workData)[number];

export default function WorkThumbnail({
  title,
  description,
  imageUrl,
  skills,
  bg,
}: WorkThumbnailProps) {
  return (
    <div>
      <section
        className={`group ${bg} sm:h-[25rem] overflow-hidden sm:pr-8 relative 
  sm:flex content-center mb-5 last:mb-0 hover:bg-[#f2f1fd]
  hover:cursor-pointer transition-all drop-shadow-md`}
      >
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>
      <div>
        <h3 className={`text-xl font-semibold mb-3 tracking-wide  ${inter.className}`}>{title}</h3>
        {/* <p className={`font-light text-sm ${inter.className} leading-relaxed text-gray-500 tracking-wider`}>{type}</p> */}
        <p className={`mt-1 ${poppins.className}  font-light  text-sm leading-relaxed`}>
          {description}
        </p>
        <ul className="flex flex-wrap gap-x-3 mt-1">
          {skills.map((skill, index) => (
            <li key={index} className={`${poppins.className} tracking-wide text-gray-500 font-light text-sm`}>
              {skill}
              {index < skills.length - 1 && " /"}
            </li>
          ))}
        </ul>


      </div>
    </div>
  );
}
