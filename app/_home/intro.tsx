"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import SectionContainer from "../_components/sectionContainer";
import { inter, sourceSerfif, TiempoBold, TiempoSemi, dmSerif } from "../fonts";
import Image from "next/image";
import profile from "../../public/profile.jpg"

export default function Intro() {
  return (
    <div className="mb-12 mt-10">
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

              <div className="background-gradient flex items-center justify-center">
                <div className="circle1 bg-circle"></div>
                <div className="circle2 bg-circle"></div>
                <div className="curve-line"></div>
              </div>
              <p className={`text-7xl  ${TiempoSemi.className} bg-white`}>
                <span className={`${dmSerif.className}`}>Hello World!</span><br />
                I<span className={`${TiempoSemi.className} mt-3 mb-[-7px] relative`} style={{ top: '-47px', left: '1px' }}>,</span>
                m <span className="text-[#4229d6]">Kim</span>.
              </p>

              <p className={`text-lg pt-5  ${sourceSerfif.className} leading-8 bg-white`}>
                I'm a senior frontend engineer, product designer and artist.
              </p>
              <div className={`text-base pt-20 leading-8  bg-white ${sourceSerfif.className} font-base`}>
                <p>Recepient of the Meiya Reinking and</p>
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
              <button className={` ${sourceSerfif.className} bg-[#4229d6] hover:scale-110 transition hover:bg-gray-800 text-[white] px-4 py-2 rounded-full `}>
                Contact Me
              </button>
              <button className={`${sourceSerfif.className} bg-white hover:bg-gray-100 px-4 rounded-full hover:scale-110 transition text-gray-700`}>
                My CSV
              </button>
              <button className="bg-white hover:bg-gray-100 width-auto p-3 hover:scale-110 transition rounded-full text-gray-700">
                <BsLinkedin />
              </button>
            </motion.div>
          </div>

          <motion.div
            className="w-[25em] ml-5"
            whileHover={{
              scale: 1.1, // Scale up the image by 10% when hovered
              transition: { duration: 0.2 }, // Animation duration of 0.2 seconds
            }}
            whileTap={{
              scale: 0.9, // Scale down the image by 10% when tapped or clicked
            }}
          >
            <Image
              src={profile}
              alt="profile"
              quality={95}
              className="inset-0 w-full h-full object-contain"
            />
          </motion.div>
        </section>
      </SectionContainer>
    </div>
  );
}
