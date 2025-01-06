"use client";

import React from "react";
import SectionContainer from "../_components/sectionContainer";
import { motion } from "framer-motion";
import SectionHeading from "../_components/sectionHeading";
import { skills } from "./data/skills";

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
  items: string[];
  category: string;
};

const SkillList = ({ items, category }: SkillListProps) => {
  return (
    <ul className="mb-4">
      <h3 className="mb-2 text-[#4229d6]">{category}:</h3>
      <div className="flex flex-wrap gap-x-[1rem]">
        {items.map((skill, index) => (
          <motion.li
            //className="bg-indigo-900  hover:bg-indigo-00 transition px-4 py-2 rounded-full"
            //className="bg-white text-gray-800 hover:bg-indigo-100 transition px-4 py-2 rounded-full"
            className="text-sm 	transition rounded-full mb-2"

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
      </div>

    </ul>
  );
};

export default function Skills() {
  return (
    <section className="pb-[3rem] skillls">
      <SectionContainer>
        <div className="grid grid-row-2 gap-5">
          {skills.map((skillSet, index) => (
            <SkillList 
              key={skillSet.category}
              items={skillSet.items} 
              category={skillSet.category} 
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
