"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import SectionContainer from "../_components/sectionContainer";
import { inter, sourceSerif, TiempoSemi } from "../fonts";
import profileImage from "../../public/profile.webp";
import Typewriter from 'typewriter-effect';
import Image from "next/image";

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
        <section className={`flex flex-col sm:flex-row items-center justify-center pt-[6rem] pb-[4rem] ${inter.className}`}>
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
              <span className="block h-3"></span>
              <span className={`text-6xl ${TiempoSemi.className} bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent`}>
                I'm Kim.
              </span>
              <div className={`sm:align-center sm:items-start sm:justify-left text-2xl pt-4 leading-9 flex flex-col items-center justify-center ${sourceSerif.className}`}>
                <div className="flex justify-center sm:justify-left sm:items-start h-[3em]">
                  <p> Senior software engineer, product designer and artist</p>
                </div>
              </div>
              <div className={`text-center sm:text-left text-lg mt-20 leading-8 ${sourceSerif.className} font-base`}>
                <p>Recepient of the Meiya Reinking and</p>
                <p>District of Edmonton Art Award</p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row mt-10 gap-6 sm:gap-3"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.9,
              }}
            >
              <button
                onClick={sendEmail}
                className={`${sourceSerif.className} text-lg bg-gradient-to-r from-orange-400 to-yellow-500 sm:hover:scale-110 transition hover:from-orange-300 hover:to-yellow-400 rounded-lg text-white px-6 py-4 sm:py-2 sm:rounded-full`}
              >
                Contact Me
              </button>
              <button
                onClick={openNewTab}
                className="bg-gradient-to-r from-pink-400 to-purple-400 sm:hover:scale-110 transition hover:from-pink-300 hover:to-purple-300 rounded-lg text-white flex justify-center items-center px-6 py-4 sm:py-2 sm:rounded-full"
              >
                My CSV
              </button>
              <button
                onClick={openLinkedIn}
                className={`${sourceSerif.className} text-lg bg-gradient-to-r from-teal-400 to-cyan-500 sm:hover:scale-110 transition hover:from-teal-300 hover:to-cyan-400 rounded-lg text-white px-6 py-4 sm:py-2 sm:rounded-full`}
              >
                <FaLinkedinIn className="w-5 h-5" />
              </button>
            </motion.div>


          </div>
          <motion.div
            className="hidden sm:flex w-[20em] h-[20em] ml-5 items-center justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.9,
              duration: 0.9,
            }}
          >
            <Image
              src={profileImage}
              alt="Profile of Kimberly Wu"
              className="rounded-full w-full h-full object-cover shadow-lg"
            />
          </motion.div>
        </section>
      </SectionContainer>
    </div>
  );
}
