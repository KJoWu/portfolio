'use client'

import { FiArrowRight } from "react-icons/fi";
import { useTheme } from "../../_context/themeContext";

export const Hero = () => {
  const { isDark } = useTheme();

  const openNewTab = () => {
    window.open('/KimberlyWu Resume.pdf', '_blank');
  };
  
  const sendEmail = () => {
    window.open('mailto:kim.jokwah@gmail.com', '_blank');
  };

  return (
    <section className="mb-20 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h1 className="text-4xl md:text-3xl font-bold mb-6 leading-tight">
          hello world! 👋
          <br />
        </h1>

        <h1 className="pb-3">
          <span className="text-4xl  md:text-7xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            I'm Kim.
          </span>
        </h1>
        <b
          className={`${isDark ? "text-gray-400" : "text-gray-600"
            } mt-5 pt-5 text-lg max-w-2xl mb-3`}
        >
          Software Engineer & Digital Marketing Specialist
        </b>
        <p
          className={`${isDark ? "text-gray-400" : "text-gray-600"
            } text-lg max-w-2xl mb-8`}
        >
          Recepient of the Meiya Reinking & District of Edmonton Art Award
        </p>
        <div className="flex gap-4">
          <button 
            onClick={openNewTab} 
            className="group flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-all text-lg"
          >
            View Resume
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={sendEmail}
            className={`group flex items-center gap-2 px-6 py-3 rounded-full transition-all text-lg cursor-pointer
              ${isDark
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              }`}
          >
            Contact Me
          </button>
        </div>
      </div>

      <div className="relative">
        {/* Profile image section commented out in original */}
      </div>
    </section>
  );
};

export default Hero;
