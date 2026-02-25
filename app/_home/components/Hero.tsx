"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FiArrowRight, FiDownload, FiMail, FiStar } from "react-icons/fi";
import { useTheme } from "../../_context/themeContext";

export const Hero = () => {
  const { isDark } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openNewTab = () => {
    window.open('/Kimberly%20Wu%20Senior%20Engineer%20Resume.pdf', '_blank');
  };

  const openSocialTab = () => {
    window.open('/Kimberly%20Wu%20Events%20&%20Social%20Media%20Resume.pdf', '_blank');
  };

  const sendEmail = () => {
    window.open('mailto:kim.jokwah@gmail.com', '_blank');
  };

  return (
    <section className="mb-32 pt-20 relative">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          {/* Greeting with animation */}
          <div className={`transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className={`text-sm font-medium tracking-wide uppercase ${isDark ? "text-gray-400" : "text-gray-600"
                }`}>
                Available for opportunities
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-medium mb-2 leading-relaxed">
              hello world! 👋
            </h1>
          </div>

          {/* Main heading with modern gradient */}
          <div className={`transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                I'm Kim.
              </span>
            </h1>
          </div>

          {/* Role + value prop */}
          <div className={`transition-all duration-1000 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold">
                <span className={`${isDark ? "text-gray-200" : "text-gray-800"}`}>
                  UX Engineer & Frontend Developer
                </span>
              </h2>

              <p className={`text-lg leading-relaxed max-w-2xl ${isDark ? "text-gray-400" : "text-gray-600"
                }`}>
                I design and build product experiences that sit at the intersection of UX, engineering, and
                storytelling, shipping interfaces that feel clear, fast, and intentional.
              </p>
            </div>
          </div>

          {/* Enhanced CTA buttons */}
          <div className={`transition-all duration-1000 delay-800 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex flex-col mb-2">
              <span
                className={`text-lg leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                Resumes
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Software Resume Button (left) */}
              <button
                onClick={openNewTab}
                className="group relative overflow-hidden bg-gradient-to-r from-sky-500 to-blue-500 text-white pl-6 pr-3 py-3 rounded-2xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/40 text-left min-w-[260px]"
              >
                <div className="flex items-center gap-2 relative z-10 text-base">
                  <span className="font-medium text-left">Software Developer</span>
                  <FiDownload size={22} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {/* Growth Resume Button (right) */}
              <button
                onClick={openSocialTab}
                className="group relative overflow-hidden bg-gradient-to-r from-orange-400 to-rose-500 text-white pl-6 pr-3 py-3 rounded-2xl hover:from-orange-500 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/30 text-left min-w-[260px]"
              >
                <div className="flex items-center gap-2 relative z-10 text-base">
                  <span className="font-medium text-left">Events & Social Lead</span>
                  <FiDownload size={22} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>


        </div>

        {/* Enhanced visual element with profile image */}
        <div className="relative lg:flex-shrink-0">
          <div className={`transition-all duration-1000 delay-1000 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}>
            <div className="relative w-80 h-80 lg:w-[28rem] lg:h-[28rem]">
              {/* Center gradient orb */}
              <div className="absolute inset-10 rounded-full bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-xl animate-pulse"></div>
              <div className="absolute inset-14 rounded-full bg-gradient-to-br from-indigo-400/40 via-purple-400/40 to-pink-400/40 animate-pulse delay-1000"></div>

              {/* Profile image with colorful border */}
              <div className="absolute inset-6 lg:inset-10 rounded-full shadow-xl">
                <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-black">
                    <Image
                      src="/profile.webp"
                      alt="Portrait of Kimberly Wu"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
