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
        <section className={`flex flex-col sm:flex-row justify-between pt-[8rem] pb-[5rem] ${inter.className}`}>
          <div className="sm:w-[24rem] relative text-center sm:text-left">
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

              <div className={`sm:align-center sm:items-start sm:justify-left text-2xl pt-5 leading-9 flex flex-col items-center justify-center ${sourceSerif.className}`}>
                <div className="flex justify-center sm:justify-left sm:items-start h-[3em]">
                  <p> Senior software engineer, product designer and artist</p>
                </div>
              </div>
              <div className={`text-center sm:text-left text-lg mt-36 leading-8 ${sourceSerif.className} font-base`}>
                <p>Recepient of the Meiya Reinking and</p>
                <p>District of Edmonton Art Award</p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row mt-12 gap-6 sm:gap-3"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.9,
              }}
            >
              <button
                onClick={sendEmail}
                className={`${sourceSerif.className} text-lg bg-indigo-600 sm:hover:scale-110 transition hover:bg-indigo-800 rounded-lg text-white px-6 py-4 sm:py-2 sm:rounded-full`}
              >
                Contact Me
              </button>
              <button
                onClick={openNewTab}
                className={`${sourceSerif.className} text-lg bg-white border border-1 border-indigo-600 hover:bg-indigo-100  rounded-lg px-6 py-4 sm:py-2 sm:rounded-full sm:hover:scale-110 transition text-indigo-600`}
              >
                My CSV
              </button>
              <button
                onClick={openLinkedIn}
                className="bg-white border border-1 border-indigo-600 sm:hover:bg-indigo-100 px-3 sm:rounded-full rounded-lg sm:hover:scale-110 transition text-indigo-600 flex justify-center items-center py-4 sm:py-2"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          <motion.div
            className="hidden sm:block w-[33em] h-[30em] ml-5 flex items-center justify-center"
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
