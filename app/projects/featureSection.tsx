import React from "react";
import SectionHeading from "../_components/sectionHeading";
import { TiempoSemi } from "../fonts";
import { motion } from "framer-motion";


export default function ProjectHighlightSection() {

  return (
    <div
      className={`bg-white pt-[9rem] pb-[1rem]`}
    // style={{ backgroundImage: `url("./a2.png")` }}
    >

      <SectionHeading>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            delay: 0.5,
            duration: 0.2,
          }}
        >
          <h1 className={`text-center md:text-left text-5xl  ${TiempoSemi.className}`}>Additional Projects</h1>
        </motion.div>

      </SectionHeading>
    </div>
  );
}
