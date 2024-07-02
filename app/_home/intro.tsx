"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import SectionContainer from "../_components/sectionContainer";
import { inter, sourceSerif, TiempoSemi } from "../fonts";
import Typewriter from 'typewriter-effect';

export default function Intro() {
  const openNewTab = () => {
    window.open('/KimberlyWu Resume.pdf', '_blank');
  };

  const sendEmail = () => {
    window.location.href = 'mailto:kim.jokwah@gmail.com';
  }

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/kimberly-wu/', '_blank');
  }

  return (
    <div className="mb-12 pt-20 bg-gradient-to-b from-[#e5fcff] via-white to-white">
      <SectionContainer>
        <section className={`flex flex-col md:flex-row justify-between pt-[8rem] pb-[5rem] ${inter.className}`}>
          <div className="md:w-[24rem] relative text-center md:text-left">
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

              <div className={`md:align-center md:items-start md:justify-left text-2xl pt-5 leading-9 flex flex-col items-center justify-center ${sourceSerif.className}`}>
                <div className="flex items-center justify-center md:justify-left md:items-start">
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
              </div>
              <div className={`text-center md:text-left text-lg mt-36 leading-8 ${sourceSerif.className} font-base`}>
                <p>Recepient of the Meiya Reinking and</p>
                <p>District of Edmonton Art Award</p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col md:flex-row mt-12 gap-6 md:gap-3"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.9,
              }}
            >
              <button
                onClick={sendEmail}
                className={`${sourceSerif.className} text-lg bg-indigo-600 md:hover:scale-110 transition hover:bg-indigo-800 rounded-lg text-white px-6 py-4 md:py-2 md:rounded-full`}
              >
                Contact Me
              </button>
              <button
                onClick={openNewTab}
                className={`${sourceSerif.className} text-lg bg-white border border-1 border-indigo-600 hover:bg-indigo-100  rounded-lg px-6 py-4 md:py-2 md:rounded-full md:hover:scale-110 transition text-indigo-600`}
              >
                My CSV
              </button>
              <button
                onClick={openLinkedIn}
                className="bg-white border border-1 border-indigo-600 md:hover:bg-indigo-100 px-3 md:rounded-full rounded-lg md:hover:scale-110 transition text-indigo-600 flex justify-center items-center py-4 md:py-2"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          <motion.div
            className="hidden md:block w-[33em] h-[30em] ml-5 flex items-center justify-center"
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
