'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { links } from '../lib/pageLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sourceSerif } from "../fonts";

type LinkType = {
  hash: string;
  name: string;
};

export default function Header() {
  const pathname = usePathname();

  const getLinkClassName = (linkHash: string) => {
    if (pathname === '/projects' && linkHash === '/projects') {
      return 'text-indigo-600 font-semibold';
    }
    if ((pathname === '/' || pathname === '/work') && (linkHash === '/' || linkHash === '/work')) {
      return 'text-indigo-600 font-semibold';
    }
    return 'hover:text-gray-950';
  };

  return (
    <header className="z-[999] relative flex items-center justify-center">
      <motion.div
        className="fixed top-0 w-full h-[5rem] bg-white bg-opacity-80 shadow-lg shadow-cyan-300/[0.2] backdrop-blur-[0.2rem] border-b border-indigo-600 md:border md:border-indigo-600 md:border-1 md:border-solid md:top-6 md:right-20 md:max-w-[16rem] md:rounded-full md:h-[2.8rem]"
        initial={{ y: -100, x: '50%', opacity: 0 }}
        animate={{ y: 0, x: '0', opacity: 1 }}
      >
        <nav className="flex h-full items-center justify-center">
          <ul className="flex w-full items-center justify-center  text-gray-800">
            {links.map((link: LinkType) => (
              <motion.li
                key={link.hash}
                className="flex items-center justify-center h-full"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  href={link.hash}
                  className={`${sourceSerif.className} text-2xl md:text-base flex items-center justify-center px-4 py-3 transition h-full cursor-pointer ${getLinkClassName(link.hash)}`}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
