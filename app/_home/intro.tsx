"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import SectionContainer from "../_components/sectionContainer";
import { inter, sourceSerfif, TiempoSemi, dmSerif } from "../fonts";
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
              <span className={`text-2xl ${sourceSerfif.className}`}>hello world!</span>
              <span className="block h-4"></span>
              <span className={`text-6xl ${TiempoSemi.className}`}>I'm Kim.</span>

              <p className={`text-2xl pt-5   ${sourceSerfif.className} leading-9`}>
                I'm a senior frontend engineer, product designer and artist.
              </p>
              <div className={`text-xl pt-20 leading-8  bg-white ${sourceSerfif.className} font-base`}>
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
              <button className={` ${sourceSerfif.className} text-lg bg-[#4229d6] hover:scale-110 transition hover:bg-gray-800 text-[white] px-4 py-2 rounded-full `}>
                Contact Me
              </button>
              <button className={`${sourceSerfif.className}  text-lg bg-white hover:bg-gray-100 px-4 rounded-full hover:scale-110 transition text-gray-700`}>
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
