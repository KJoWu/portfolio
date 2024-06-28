import React from "react";
import { poppins, TiempoSemi } from "../fonts"; // Ensure this is actually used
import { StaticImageData } from "next/image";
import Link from 'next/link';

interface WorkThumbnailProps {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  buttonDescription: string;
  skills: string[];
  bg: string;
  buttonColor: string;
  url?: string;  // Optional url property
}

export default function WorkThumbnail({
  title,
  description,
  buttonDescription,
  imageUrl,
  skills,
  buttonColor,
  bg,
  url
}: WorkThumbnailProps) {

  const button = (
    <button className={` hover:bg-${buttonColor}-700 text-white  py-2 px-4 rounded-md mt-5`} style={{ backgroundColor: `${buttonColor}` }}>
    {buttonDescription}
  </button>
  );

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
          <p className={`${poppins.className} text-sm`}>
            {description}
          </p>

          {url ? (
            <Link href={url} passHref target="_blank">
              {button}
            </Link>
          ) : (
            button
          )
          }
        </div>
      </div>
    </div>
  );
}
