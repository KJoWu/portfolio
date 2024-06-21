"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import bannerImage from "../../public/banner.png";
import SectionContainer from '../_components/sectionContainer';
// import { FlairCaseStudy } from './flairCaseStudy';
import { HeuristicSection } from './heuristicSection';
import { UserComplaintsSection } from './userComplaintsSection';
import { RedesignSection } from './redesignSection';
import { IntroSection } from './IntroSection';
import { PurposeSection } from './purposeSection';
import { ProblemSection } from './problemSection';
import { ScopingSection } from './scopingSection';
import CaseSection from './caseSection';
import { playFair, inter, poppins } from "../fonts";
import { FinalDesign } from './findalDesign';


const sectionVariants = {
  hidden: { y: 50 },
  visible: { y: 0 },
};

const FlairCaseStudyData = () => {
  return (
    <div className="ml-[5em] mt-40">
      <div className={`container mx-auto px-4 ${poppins.className}`}>

        {/******************************************************** Section Cutoff */}

        <motion.section
          id="section2"
          className="relative"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <CaseSection>
            <IntroSection />
          </CaseSection>
        </motion.section>

        {/******************************************************** Section Cutoff */}



        <motion.section
          id="section2"
          className="relative"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <CaseSection>
            <ProblemSection />
          </CaseSection>

        </motion.section>
        {/******************************************************** Section Cutoff */}
        <motion.section
          id="section2"
          className="relative"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <CaseSection>
            <HeuristicSection />
          </CaseSection>

        </motion.section>

        {/******************************************************** Section Cutoff */}

        <motion.section
          id="section3"
          className="relative font-base pb-20"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >

          <CaseSection>
            <UserComplaintsSection />
          </CaseSection>


        </motion.section>
        {/******************************************************** Section Cutoff */}



        <motion.section
          id="section3"
          className="relative font-base pb-20"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <CaseSection>
            <PurposeSection />
          </CaseSection>


        </motion.section>

        {/******************************************************** Section Cutoff */}

        <motion.section
          id="section3"
          className="relative font-base pb-20"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <CaseSection>
            <ScopingSection />
          </CaseSection>


        </motion.section>

        {/******************************************************** Section Cutoff */}


        <motion.section
          id="section3"
          className="relative font-base pb-20"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <CaseSection>

            <RedesignSection />
          </CaseSection>


        </motion.section>

        {/******************************************************** Section Cutoff */}

        <motion.section
          id="section3"
          className="relative font-base pb-20"
          whileInView="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
        >
          <CaseSection>

            <FinalDesign />
          </CaseSection>


        </motion.section>

      </div>
    </div>
  );
};

export default FlairCaseStudyData;
