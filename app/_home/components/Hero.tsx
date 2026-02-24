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
    window.open('/KimberlyWu Resume.pdf', '_blank');
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

          {/* Main heading with enhanced gradient */}
          <div className={`transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                I'm Kim.
              </span>
            </h1>
          </div>

          {/* Enhanced role description */}
          <div className={`transition-all duration-1000 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold">
                <span className={`${isDark ? "text-gray-200" : "text-gray-800"}`}>
                  Software Engineer & Digital Marketing Specialist
                </span>
              </h2>

              <div className="flex items-center gap-2">
                <FiStar className="text-yellow-500" size={18} />
                <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Recipient of the Meiya Reinking & District of Edmonton Art Award
                </p>
              </div>

              <p className={`text-lg leading-relaxed max-w-2xl ${isDark ? "text-gray-400" : "text-gray-600"
                }`}>
                Crafting digital experiences that blend technical excellence with creative innovation.
                Passionate about building solutions that make a meaningful impact.
              </p>
            </div>
          </div>

          {/* Enhanced CTA buttons */}
          <div className={`transition-all duration-1000 delay-800 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Growth Resume Button */}
              <button
                onClick={openSocialTab}
                className="group relative overflow-hidden bg-gradient-to-r from-purple-400 to-fuchsia-400 text-white px-5 py-3 rounded-2xl hover:from-purple-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <div className="flex items-center gap-3 relative z-10">
                  <FiDownload size={28} />
                  <span className="font-medium text-left">Events & Social Lead Resume</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {/* Software Resume Button */}
              <button
                onClick={openNewTab}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-sky-400 text-white px-5 py-3 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <div className="flex items-center gap-3 relative z-10">
                  <FiDownload size={28} />
                  <span className="font-medium">Software Resume</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {/* Contact Me Button */}
              <button
                onClick={sendEmail}
                className={`group relative overflow-hidden px-5 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 font-medium w-full sm:w-auto ${isDark
                  ? "bg-blue-900/30 text-blue-200 hover:bg-blue-800/40 border border-blue-700/50 hover:border-blue-600/70"
                  : "bg-blue-50/70 text-blue-700 hover:bg-blue-100/80 border border-blue-200/70 hover:border-blue-300/80"
                  } backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10`}
              >
                <div className="flex items-center justify-start gap-3 w-full text-left relative z-10">
                  <FiMail size={28} />
                  <span>Contact Me</span>
                </div>
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

              {/* Profile image */}
              <div className="absolute inset-6 lg:inset-10 rounded-full overflow-hidden border-4 border-white/60 shadow-xl">
                <Image
                  src="/profile.webp"
                  alt="Portrait of Kimberly Wu"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating elements */}
              <div className="absolute top-8 right-8 w-4 h-4 bg-indigo-400 rounded-full animate-bounce delay-500"></div>
              <div className="absolute bottom-8 left-8 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute top-1/2 left-4 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-1500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
