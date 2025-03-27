'use client'

import { useState } from "react";
import { useTheme } from "../../_context/themeContext";
import { devProjects } from "../data/projects";
import { creativeWorks } from "../data/creativeWorks";
import ProjectCard from "./ProjectCard";
import CreativeWorkCard from "./CreativeWorkCard";
import VideoCard from "../../_components/videoCard";
import { Video } from "../data/creativeWorks";

export const Projects = () => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<"dev" | "creative">("dev");
  const [activeGallery, setActiveGallery] = useState<string>("Applications");

  return (
    <section>
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {["dev", "creative"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "dev" | "creative")}
            className={`px-6 py-2 rounded-full text-base font-medium transition-all
              ${activeTab === tab
                ? "bg-indigo-600 text-white"
                : `${isDark
                  ? "bg-gray-900 text-gray-400 hover:bg-gray-800"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`
              }`}
          >
            {tab === "dev" ? "Work + Development" : "Creative"}
          </button>
        ))}
      </div>

      {activeTab === "dev" ? (
        <div className="grid grid-cols-1 gap-8">
          {devProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      ) : (
        <div>
          <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
            {Object.keys(creativeWorks).map((category) => (
              <button
                key={category}
                onClick={() => setActiveGallery(category)}
                className={`px-6 py-2 rounded-full text-base font-medium transition-all
                  ${activeGallery === category
                    ? "bg-indigo-600 text-white"
                    : `${isDark
                      ? "bg-gray-900 text-gray-400 hover:bg-gray-800"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {activeGallery === "Videography" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(creativeWorks[activeGallery] as Video[]).map((video, index) => (
                <VideoCard key={index} video={video} isDark={isDark} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(creativeWorks[activeGallery] as any[]).map((work, index) => (
                <CreativeWorkCard key={index} work={work} />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Projects;
