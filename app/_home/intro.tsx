"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import SectionContainer from "../_components/sectionContainer";
import { inter, poppins } from "../fonts";
import Skills from "./skills";
import Drawing from "./drawing";

export default function Intro() {
  return (
    <div>
      <div className="absolute inset-0 h-full w-full" />
      <SectionContainer>
        <section className={`flex flex-col sm:flex-row justify-between pt-[8rem] pb-[5rem] ${inter.className}`}>
          <div className="w-[25rem] relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                delay: 0.5,
                duration: 0.2,
              }}
            >
              <p className={`text-5xl font-medium ${poppins.className} bg-white`}>
                Hi, I'm <span className="text-[#4229d6]">Kim</span>.
              </p>

              <p className={`text-xl pt-5  ${poppins.className} leading-9 bg-white`}>
                I'm a Senior Frontend Engineer, product designer and artist.
              </p>
              <div className={`pt-3 leading-8  bg-white ${poppins.className} font-base`}>
                <p>Recepient of the Meiya Reinking Art Award</p>
                <p>District of Edmonton Art Award</p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row mt-16 gap-2"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.9,
              }}
            >
              <button className="bg-[#4229d6] hover:scale-110 transition hover:bg-gray-800 text-[white] px-4 py-2 rounded-full ">
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
            {/* <Drawing /> */}
          </div>
        </section>
      </SectionContainer>
    </div>
  );
}
