'use client'

import { FiArrowRight } from "react-icons/fi";
import { CreativeWork } from "../data/creativeWorks";
import { useTheme } from "../../_context/themeContext";

interface CreativeWorkCardProps {
  work: CreativeWork;
}

export const CreativeWorkCard = ({ work }: CreativeWorkCardProps) => {
  const { isDark } = useTheme();

  return (
    <div className="group relative overflow-hidden rounded-xl aspect-square">
      <img
        src={work.image}
        alt={work.title}
        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-white font-medium text-xl">
          {work.title}
        </h3>
        <p className="text-gray-200 text-base mt-2">
          {work.description}
        </p>
        {work.link && work.link !== "" && (
          <a
            href={work.link}
            className="mt-4 inline-flex items-center text-white gap-2 text-base"
          >
            View Project <FiArrowRight />
          </a>
        )}
      </div>
    </div>
  );
};

export default CreativeWorkCard;
