"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import SectionContainer from "../_components/sectionContainer";
import { playFair, poppins } from "../fonts";

export default function Intro() {
  return (
    <SectionContainer>
      <section className="flex flex-col sm:flex-row justify-between pt-[15rem] pb-[12rem]">
        <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_20%,#000_60%,transparent_100%)] z-1"/>
        <div className="w-[22rem] relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.5,
              duration: 0.2,
            }}
          >
            <p className={`text-6xl font-extrabold ${poppins.className}`}>Hi, I'm <span className="text-[#4229d6]">Kim</span>.</p>
            
            <p className={`text-2xl pt-5  ${poppins.className}`}>
              I'm a Senior Frontend Engineer, product designer and artist.
            </p>
            <p className="pt-3 font-light text-lg">
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

        <div className="relative">
            <p>Meiya Reinking Art Award</p>
            <p>District of Edmonton Art Award</p>

        </div>
      </section>
    </SectionContainer>
  );
}
