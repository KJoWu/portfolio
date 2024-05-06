import React from "react";
import SectionHeading from "../components/sectionHeading";
import { projectsData } from "../lib/projectData";
import Image from "next/image";


export default function projects() {
  return (
    <section className="relative flex flex-col  sm:py-[7rem] sm:px-[10em] bg-white">
      <SectionHeading>Selected Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      projects
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, imageUrl, tags }: ProjectProps) {
  return (
    <section>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <Image src={imageUrl} alt={title}/>
    </section>
  );
}
