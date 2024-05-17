import React from "react";
import Image from "next/image";
import { featuredPlaygroundProjects } from "../lib/projectData";
import { inter } from "../fonts";

type FeaturedDataProps = (typeof featuredPlaygroundProjects)[number];

export default function FeaturedThumbnail({
  title,
  description,
  url,
}: FeaturedDataProps) {
  return (
    <div className="bg-white">
      <Image src={url} alt={title} quality={95} className="w-[32rem]" />
      <div className="flex flex-col">
        <h3
          className={`text-lg font-semibold p-2 ${inter.className} text-gray-900 w-fit  mt-[0rem]`}
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
