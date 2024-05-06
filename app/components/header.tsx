"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "../lib/pageLinks";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-[999] ">
      <motion.div
        className="fixed top-0 right-0 h-[4.5rem] w-full rounded-none border
         border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg
          shadow-black/[0.03] backdrop-blur-[0.5rem] 
          
          sm:top-6 sm:h-[3rem] sm:w-[35rem] sm:rounded-full sm:mr-10
           dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "50%", opacity: 0 }}
        animate={{ y: 0, x: "0", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] right-0 h-12 py-2 sm:top-[1.7rem] sm:right-12 sm:h-[initial] sm:py-0 sm:mr-10">
        <ul
          className="flex w-[22rem] items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500
        sm:w-[initial] sm:flex-norwa- sm:gap-5"
        >
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className="flex w-full justify-center px-3 py-3 items-center hover:text-gray-950 transition"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
