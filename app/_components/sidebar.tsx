import React from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'section1', label: 'Overview' },
  { id: 'section2', label: 'Discover' },
  { id: 'section3', label: 'Define' },
  { id: 'section4', label: 'Design' },
  { id: 'section5', label: 'Product' },
  { id: 'section6', label: 'Future Steps' },
];

const Sidebar = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div 
      className="fixed top-0 left-0 h-full text-sm p-4 space-y-8 content-center"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id} className="group relative">
            <a
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section.id);
              }}
              className="block hover:text-purple-700 transition duration-300 pl-4"
            >
              <span className="absolute left-0 h-full w-1 bg-transparent group-hover:bg-purple-700 transition duration-300"></span>
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Sidebar;
