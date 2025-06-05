'use client'

import { useState, useEffect } from "react";
import { FiLinkedin, FiMail, FiGithub } from "react-icons/fi";
import { useTheme } from "../_context/themeContext";
import ThemeToggle from "../_context/themeToggle";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const Main = () => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen transition-all duration-500 relative overflow-x-hidden
      ${isDark ? "bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] text-white" : "bg-gradient-to-br from-white via-gray-50 to-white text-gray-900"}`}
    >
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div
          className={`absolute inset-0 ${isDark ? "bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" : "bg-gradient-to-br from-white via-gray-50 to-white"}`}
        />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-400 rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-ping" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-400 rounded-full opacity-30 animate-bounce" />
        
        {/* Grid pattern overlay */}
        <div 
          className={`absolute inset-0 opacity-[0.02] ${isDark ? 'bg-white' : 'bg-black'}`}
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        />
      </div>

      {/* Modern Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 
          ? `backdrop-blur-xl ${isDark ? 'bg-black/20 border-gray-800' : 'bg-white/20 border-gray-200'} border-b`
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center py-6 px-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Kimberly Wu
          </div>
          <div className="flex items-center gap-4">
            {[
              { Icon: FiLinkedin, url: "https://www.linkedin.com/in/kimberly-wu/", label: "LinkedIn" },
              { Icon: FiMail, url: "mailto:workwith.kim.wu@gmail.com", label: "Email" },
            ].map(({ Icon, url, label }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                  isDark
                    ? "text-gray-400 hover:text-white hover:bg-gray-800/50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                } backdrop-blur-sm`}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
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
