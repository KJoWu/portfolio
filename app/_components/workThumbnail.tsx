import React from "react";
import { poppins, TiempoSemi } from "../fonts"; // Ensure this is actually used
import { StaticImageData } from "next/image";

interface WorkThumbnailProps {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  skills: string[];
  bg: string;
  url?: string;  // Optional url property
}

export default function WorkThumbnail({
  title,
  description,
  imageUrl,
  skills,
  bg,
  url
}: WorkThumbnailProps) {

  return (
    <div
      className={`group ${bg} sm:h-[25rem] overflow-hidden relative 
        sm:flex content-center rounded-2xl
        transition-all duration-300 ease-in-out transform hover:scale-105`}
      style={{
        backgroundImage: `url(${imageUrl.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >

      <div className=" flex flex-col justify-center  w-[23em] ml-12">
        <h3 className={`text-2xl font-semibold mb-3 tracking-wide ${TiempoSemi.className}`}>{title}</h3>
        <div className={`${poppins.className}`}>
          <ul className="flex flex-wrap gap-x-2 mt-1">
            {skills.map((skill, index) => (
              <li key={index} className={`${poppins.className} pt-1 text-gray-500 mb-3`}>
                {skill}
                {index < skills.length - 1 && " /"}
              </li>
            ))}
          </ul>
          <p className={`${poppins.className}`}>
            {description}
            
          </p>
        </div>
      </div>
      {/* <div className="absolute inset-0  flex items-center justify-center">


        </div>
        <div className="relative p-4 bg-opacity-100 m-4 ">
         
        </div> */}
    </div>
  );
}
