"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import SectionContainer from "../_components/sectionContainer";
import { inter, sourceSerif, TiempoSemi, dmSerif } from "../fonts";
import Typewriter from 'typewriter-effect';

export default function Intro() {

  return (
    <div className="mb-12 pt-20 bg-gradient-to-b from-[#e5fcff] via-white to-white">
      <SectionContainer>
        <section className={`flex flex-col sm:flex-row justify-between pt-[8rem] pb-[5rem] ${inter.className}`}>
          <div className="w-[24rem] relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                delay: 0.5,
                duration: 0.2,
              }}
            >
              <span className={`text-2xl ${sourceSerif.className}`}>
                <span className={`text-2xl ${sourceSerif.className}`}>hello world! 👋</span>

              </span>
              <span className="block h-4"></span>
              <span className={`text-6xl ${TiempoSemi.className} text-indigo-500`}>I'm Kim.</span>

              <div className={`text-2xl pt-5 ${sourceSerif.className} leading-9 flex`}>
                <span className="mr-1">I'm</span>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}

                  onInit={(typewriter) => {
                    typewriter.typeString('a senior frontend engineer')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('a product designer')
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString('an artist')
                      .pauseFor(3000)
                      .deleteAll()
                      .start();
                  }}
                />
              </div>
              <div className={`text-lg mt-36 leading-8 ${sourceSerif.className} font-base`}>
                <p>Recepient of the Meiya Reinking and</p>
                <p>District of Edmonton Art Award</p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row mt-12 gap-3"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.9,
              }}
            >
              <button className={` ${sourceSerif.className} text-lg bg-indigo-600 hover:scale-110 transition hover:bg-indigo-800 text-[white] px-6 py-2 rounded-full `}>
                Contact Me
              </button>
              <button className={`${sourceSerif.className} text-lg bg-white border border-1 border-indigo-600 hover:bg-indigo-100 px-6 rounded-full hover:scale-110 transition text-indigo-600`}>
                My CSV
              </button>
              <button className="bg-white hover:bg-gray-100 width-auto p-3 hover:scale-110 transition rounded-full text-gray-700">
                <BsLinkedin />
              </button>
            </motion.div>
          </div>

          <motion.div
            className="w-[33em] h-[30em] ml-5 flex items-center justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.9,
              duration: 0.9,
            }}
            
          >
            <iframe src='https://my.spline.design/miniroommusiccopy-3486cfb13d93d234aa2e95c49d895ef7/' frameBorder='0' width='100%' height='100%' className="rounded-2xl"></iframe>            
          </motion.div>  </section>

      </SectionContainer>
    </div>
  );
}
