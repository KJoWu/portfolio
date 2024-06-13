"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import bannerImage from "../../public/banner.png";
import SectionContainer from '../_components/sectionContainer';
// import { FlairCaseStudy } from './flairCaseStudy';
import { HeuristicSection } from './heuristicSection';
import { UserStorySection } from './userStorySection';
import { RedesignSection } from './redesignSection';
import { IntroSection } from './IntroSection';
import { PurposeSection } from './purposeSection';
import { ProblemSection } from './problemSection';
import { ScopingSection } from './scopingSection';

const sectionVariants = {
  hidden: { y: 50 },
  visible: { y: 0 },
};

const FlairCaseStudyData = () => {
  return (
    <div className="ml-[12em]  mt-44">
      <div className="container mx-auto px-4 max-w-4xl ml-[5em]">

        {/******************************************************** Section Cutoff */}

        <motion.section
          id="section2"
          className="relative"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <IntroSection />
        </motion.section>

        {/******************************************************** Section Cutoff */}



        <motion.section
          id="section2"
          className="relative"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <ProblemSection />
        </motion.section>
        {/******************************************************** Section Cutoff */}
        <motion.section
          id="section2"
          className="relative"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <HeuristicSection />
        </motion.section>

        {/******************************************************** Section Cutoff */}

        <motion.section
          id="section3"
          className="relative font-light pb-20"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >

          <UserStorySection />

        </motion.section>
        {/******************************************************** Section Cutoff */}



        <motion.section
          id="section3"
          className="relative font-light pb-20"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >

          <PurposeSection />

        </motion.section>

        {/******************************************************** Section Cutoff */}

        <motion.section
          id="section3"
          className="relative font-light pb-20"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >

          <ScopingSection />

        </motion.section>

        {/******************************************************** Section Cutoff */}


        <motion.section
          id="section3"
          className="relative font-light pb-20"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >

          <RedesignSection />

        </motion.section>

        {/******************************************************** Section Cutoff */}

      </div>
    </div>
  );
};

export default FlairCaseStudyData;
