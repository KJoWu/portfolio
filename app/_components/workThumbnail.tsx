import React from 'react';
import { poppins, TiempoSemi, sourceSerif } from '../fonts'; // Ensure this is actually used
import { StaticImageData } from 'next/image';
import Link from 'next/link';


interface WorkThumbnailProps {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  buttonDescription: string;
  skills: string[];
  bg: string;
  buttonColor: string;
  url?: string; // Optional url property
  backgroundColor: string;
}

export default function WorkThumbnail({
  title,
  description,
  buttonDescription,
  backgroundColor,
  imageUrl,
  skills,
  buttonColor,
  bg,
  url
}: WorkThumbnailProps) {
  const button = (
    <button
      className={`${sourceSerif.className} cursor-pointer hover:bg-opacity-75 text-white py-2 px-8 py-3 rounded-xl mt-9 text-lg`}
      style={{ backgroundColor: buttonColor }}
    >
      {buttonDescription}
    </button>
  );

  return (
    <div
      className={`bg-none-on-sm group ${bg} sm:h-[30rem] overflow-hidden relative 
        sm:flex content-center rounded-2xl 
        transition-all duration-300 ease-in-out transform hover:scale-105 py-[2em]`}
        style={{
          '--bg-image': `url(${imageUrl.src})`,
          backgroundColor: backgroundColor, 
        } as React.CSSProperties}
    >
      <div className="flex flex-col justify-center w-[23em] ml-12">
        <h3 className={`text-2xl font-semibold mb-3 tracking-wide leading-8 pt-5 ${TiempoSemi.className}`}>{title}</h3>
        <div className={`${poppins.className}`}>
          <ul className="flex flex-wrap gap-x-2 mt-1">
            {skills.map((skill, index) => (
              <li key={index} className={`${poppins.className} pt-1 text-gray-500 mb-3`}>
                {skill}
                {index < skills.length - 1 && ' /'}
              </li>
            ))}
          </ul>
          <p className={`${poppins.className} text-base leading-6 text-gray-800`}>{description}</p>

          {url ? (
            <Link href={url} passHref target="_blank" rel="noopener noreferrer">
                {button}
            </Link>
          ) : (
            button
          )}
        </div>
      </div>
    </div>
  );
}
