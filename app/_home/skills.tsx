"use client";

import React from "react";
import SectionContainer from "../_components/sectionContainer";
import { designTools, technicalTools, technicalSkills } from "../lib/projectData";

import { motion } from "framer-motion";
import SectionHeading from "../_components/sectionHeading";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

type SkillListProps = {
  skills: readonly string[];
  skillType: string;
};

const SkillList = ({ skills, skillType }: SkillListProps) => {
  return (
    <div className="my-5 last:my-0">
      <ul className="flex flex-wrap gap-2  gap-x-7 gap-y-3">
      <h3 className="mb-2">{skillType}:</h3>{skills.map((skill, index) => (
          <motion.li
            //className="bg-indigo-900  hover:bg-indigo-00 transition px-4 py-2 rounded-full"
            //className="bg-white text-slate-800 hover:bg-indigo-100 transition px-4 py-2 rounded-full"
            className="text-sm text-indigo-800 hover:text-indigo-800 transition rounded-full first:px-0"

            key={index}
            initial="initial"
            whileInView="animate"
            variants={fadeInAnimationVariants}
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default function Skills() {
  return (
    <section className="py-[3.5rem]">
      <SectionHeading>My Stack</SectionHeading>
      <SectionContainer>
        <SkillList skills={technicalSkills} skillType={"Languages & Frameworks"} />
        <SkillList skills={technicalTools} skillType={"Tehnical Tools"} />
        <SkillList skills={designTools} skillType={"Design Tools"} />
      </SectionContainer>
    </section>
  );
}
