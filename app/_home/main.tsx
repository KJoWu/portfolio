'use client'

import { useState, useEffect } from "react";
import { FiLinkedin, FiMail } from "react-icons/fi";
import { useTheme } from "../_context/themeContext";
import ThemeToggle from "../_context/themeToggle";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const Main = () => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300
      ${isDark ? "bg-[#0a0a0a] text-white" : "bg-white text-gray-900"}`}
    >
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div
          className={`absolute inset-0 ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}
        />
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      {/* Navigation */}
      <nav className="max-w-5xl mx-auto flex justify-between items-center py-8 px-4">
        <div className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Kimberly Wu
        </div>
        <div className="flex items-center gap-6">
          {[
            { Icon: FiLinkedin, url: "https://www.linkedin.com/in/kimberly-wu/" },
            { Icon: FiMail, url: "mailto:kim.jokwah@gmail.com" },
          ].map(({ Icon, url }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isDark
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors transform hover:scale-110 duration-200`}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 mt-28">
        <div className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}>
          <Hero />
          <Skills />
          <Projects />
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center pb-8">
          <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"} text-lg`}>
            Open for collaborative projects —{" "}
            <a
              href="mailto:workwith.kim.wu@gmail.com"
              className="text-indigo-600 hover:text-indigo-700"
            >
              workwith.kim.wu@gmail.com
            </a>
          </p>
        </footer>
      </main>

      {/* Site Info */}
      <div className={`p-3 text-center font-light text-sm tracking-wide text-lg ${
        isDark ? "text-gray-400 bg-black" : "text-gray-600 bg-white"
      }`}>
        This site was designed in Figma, coded in Next JS by yours truly, styled with
        Tailwind and deployed on Vercel.
      </div>
      
      <ThemeToggle />
    </div>
  );
};

export default Main;
