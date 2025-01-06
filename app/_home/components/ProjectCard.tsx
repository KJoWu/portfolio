'use client'

import { FiExternalLink } from "react-icons/fi";
import { Project } from "../data/projects";
import { useTheme } from "../../_context/themeContext";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`group backdrop-blur-sm rounded-2xl overflow-hidden transition-all
        ${isDark
          ? "bg-gray-900/50 hover:bg-gray-800/50"
          : "bg-gray-50/50 hover:bg-gray-100/50"
        }`}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 relative aspect-video">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
          />
        </div>
        <div className="md:w-1/2 p-8">
          <div
            className={`w-10 h-10 rounded-xl bg-gradient-to-r ${project.color} mb-6 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform`}
          >
            {index + 1}
          </div>
          <h3 className="text-xl font-bold mb-4">{project.title}</h3>
          <p
            className={`text-sm ${
              isDark ? "text-gray-400" : "text-gray-600"
            } text-lg mb-6 leading-relaxed`}
          >
            {project.description}
          </p>
          <div className="flex justify-between items-center">
            <p
              className={`text-sm gap-5 ${
                isDark ? "text-gray-500" : "text-gray-400"
              }`}
            >
              {project.tech}
            </p>
            <div className="flex">
              {project.link && (
                <a
                  href={project.link}
                  className="text-gray-400 hover:text-indigo-500 transition-colors"
                >
                  <FiExternalLink size={24} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
