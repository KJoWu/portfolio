import React from "react";
import SectionHeading from "../components/sectionHeading";
import { projectsData } from "../lib/projectData";
import Image from "next/image";
import SectionContainer from "../components/sectionContainer";

export default function projects() {
  return (
    <section className="relative flex flex-col  sm:py-[4rem] bg-white">
      <SectionHeading>Selected Projects</SectionHeading>
      <SectionContainer>
        <div>
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, imageUrl, tags }: ProjectProps) {
  return (
    <section
      className="group bg-gray-100 sm:h-[25rem] border border-black/5 overflow-hidden 
        sm:pr-8 even:pr-0 relative sm:flex content-center sm:even:flex-row-reverse mb-5 last:mb-0
        hover:bg-gray-200 hover:cursor-pointer  transition-all"
    >
      <div className="pt-5 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
        <h3 className="text-2xl">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] tracking-wider text-white rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>
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
        group-even:group-hover:translate-x-3
"
      />
    </section>
  );
}
