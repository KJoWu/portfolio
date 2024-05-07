"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import SectionContainer from "../_components/sectionContainer";

export default function Intro() {
  return (
    <SectionContainer>
      <section className="relative flex flex-col sm:flex-row justify-between pt-[15rem] pb-[12rem]">
        <div className="w-[22rem]">
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.5,
              duration: 0.2,
            }}
          >
            <p className="text-5xl">Hi, I'm Kim</p>
            <p className="text-1xl pt-5 ">
              I'm a <b>Senior Frontend Engineer</b>, <b>product designer</b> and{" "}
              <b>artist</b> with <b>8 years</b> of experience
            </p>
            <p className="">
              Currently working on next gen products involving llm and AI
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row text-sm mt-9 gap-2"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9,
            }}
          >
            <button className="bg-gray-900 hover:scale-110 transition hover:bg-gray-800 text-white px-4 py-2 rounded-full">
              Contact Me
            </button>
            <button className="bg-white hover:bg-gray-100 px-4 rounded-full hover:scale-110 transition text-gray-700">
              My CSV
            </button>
            <button className="bg-white hover:bg-gray-100 width-auto p-3 hover:scale-110 transition rounded-full text-gray-700">
              <BsLinkedin />
            </button>
          </motion.div>
        </div>

        <div>Icon on Right Use a big picture</div>
      </section>
    </SectionContainer>
  );
}
