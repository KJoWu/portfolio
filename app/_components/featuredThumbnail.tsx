import React from "react";
import Image from "next/image";
import { featuredData } from "../lib/projectData";
import { playFair, poppins } from "../fonts";

type FeaturedThumbnailProps = (typeof featuredData)[number];

export default function FeaturedThumbnail({
  title,
  description,
  url,
}: FeaturedThumbnailProps) {
  return (
    <div className="bg-white">
      <Image src={url} alt={title} quality={95} className="w-[32rem]" />
      <div className="flex flex-col">
        <h3
          className={`text-lg font-semibold p-2 ${poppins.className} text-gray-900 w-fit  mt-[0rem]`}
        >
          {title}
        </h3>
        <p className="pt-2 text-md font-light text-md leading-relaxed text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
}
