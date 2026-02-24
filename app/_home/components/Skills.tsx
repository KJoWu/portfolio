'use client'

import { useState, useEffect } from "react";
import { useTheme } from "../../_context/themeContext";
import { skills } from "../data/skills";

export const Skills = () => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills-section" className="mb-24">
      <div className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}>
            A diverse toolkit spanning development, design, and digital strategy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {skills.map((skillSet, index) => (
            <div
              key={skillSet.category}
              className={`group relative p-6 rounded-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 ${
                isDark 
                  ? "bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 hover:border-gray-600/50" 
                  : "bg-gradient-to-br from-white/80 to-gray-50/80 border border-gray-200/50 hover:border-gray-300/50"
              } backdrop-blur-sm hover:shadow-2xl ${
                index === 0 ? "hover:shadow-indigo-500/10" :
                index === 1 ? "hover:shadow-purple-500/10" :
                "hover:shadow-pink-500/10"
              }`}
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              
              <h3 className="text-lg font-semibold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                {skillSet.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {skillSet.items.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 transform hover:scale-105 cursor-default ${
                      isDark
                        ? "bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 hover:text-white border border-gray-700/50"
                        : "bg-gray-100/80 text-gray-700 hover:bg-gray-200/80 hover:text-gray-900 border border-gray-200/50"
                    }`}
                    style={{
                      animationDelay: `${(index * 200) + (skillIndex * 50)}ms`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
