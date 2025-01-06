'use client'

import { useTheme } from "../../_context/themeContext";
import { skills } from "../data/skills";

export const Skills = () => {
  const { isDark } = useTheme();

  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold mb-8">Skills & Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skills.map((skillSet) => (
          <div
            key={skillSet.category}
            className={`p-6 rounded-xl ${
              isDark ? "bg-gray-900/50" : "bg-gray-50"
            }`}
          >
            <h3 className="text-lg font-semibold mb-4">
              {skillSet.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillSet.items.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-full text-sm
                    ${
                      isDark
                        ? "bg-gray-800 text-gray-300"
                        : "bg-gray-200 text-gray-700"
                    }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
