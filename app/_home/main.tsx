"use client"
import React, { useState, useEffect } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
  FiArrowRight,
  FiExternalLink,
} from "react-icons/fi";
import { useTheme } from "../_context/themeContext";
import ThemeToggle from "../_context/themeToggle";
import VideoCard from "../_components/videoCard";

type Project = {
  title: string;
  description: string;
  tech: string;
  color: string;
  link: string;
  github: string;
  image: string;
};

type Video = {
  url: string;
  thumbnail: string;
  title: string;
  description: string;
  link: string;
};

type CreativeWork = {
  title: string;
  description: string;
  image: string;
  link: string;
};

type SkillSet = {
  category: string;
  items: string[];
};

const devProjects: Project[] = [
  {
    title: "LeetNight: Social for Tech Enthusiasts",
    description:
      "Founder of LeetNight, a way to connect coding enthusiasts for collaborative LeetCode problem-solving. This organization is proudly supported by Dev Edmonton Society",
    tech: "NextJS, Tailwind, Leadership, Community",
    color: "from-violet-500 to-purple-500",
    link: "https://www.leetnight.com",
    github: "",
    image:
      "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/leetnight.png",
  },
  {
    title: "Flair Airlines Case Study",
    description:
      "Conducted a case study exploring ways to enhance the onboarding user experience for flyers",
    tech: "Figma, Miro",
    color: "from-blue-500 to-cyan-500",
    link: "/flairStudy",
    github: "#",
    image:
      "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/flair.png",
  },
  {
    title: "Digital Signage for Elevators",
    description:
      "Designed and developed a screen application that displays campaigns from media buyers and notices from property managers on elevator and lobby screens",
    tech: "Figma, Typesript, ReactJS",
    color: "from-emerald-500 to-green-500",
    link: "https://www.verticalcity.com/elev8",
    github: "#",
    image:
      "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/%20Digital%20Signage%202.png",
  },
  {
    title: "Media Buyer Platform for DOOH Campaigns",
    description:
      "Developed a platform enabling media buyers to create online campaigns for digital out-of-home advertising (DOOH)",
    tech: "React,TypeScript, Ruby on Rails, Figma",
    color: "from-rose-500 to-pink-500",
    link: "https://www.verticalimpression.com",
    github: "#",
    image:
      "https://images.pexels.com/photos/6476776/pexels-photo-6476776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Content Management System for Property Managers",
    description:
      "Developed a platform enabling property managers to publish notices, news feeds, and various content on elevator and lobby screens",
    tech: "React,Ruby on Rails, TypeScript, Figma",
    color: "from-rose-500 to-pink-500",
    link: "#",
    github: "https://www.verticalimpression.com/",
    image:
      "https://www.verticalcity.com/screen-solutions",
  },
];

const videoProjects: Video[] = [
  {
    title: "Rich Laughify",
    description: "Designed a video for a hackathon",
    thumbnail: "",
    url: "https://www.youtube.com/watch?v=MRzpy4sC7Go&t=1s",
    link: "#",
  },
  {
    title: "University of Alberta Orientation",
    description: "Directed and produced the orientation video for the Faculty of Science at the University of Alberta",
    thumbnail: "",
    url: "https://www.youtube.com/watch?v=75c2_TTHWYc&t=145s",
    link: "#",
  },
  {
    title: "University of Alberta Orientation",
    description: "Directed and produced the orientation video for the Faculty of Science at the University of Alberta (fun fact, this was filmed with a Macbook)",
    thumbnail: "",
    url: "https://www.youtube.com/watch?v=3qGofRsp6nc",
    link: "#",
  },
  {
    title: "Porphyrius: Draw my Life",
    description: 'Illustrated, voiced and produced a "Draw my Life" animated short '   ,
    thumbnail: "",
    url: "https://www.youtube.com/watch?v=N4UTFSjxV9U",
    link: "#",
  },
  {
    title: "Kaye Institute Promotional    ",
    description: "Created the promotional video for Kaye Institute    ",
    thumbnail: "",
    url: "https://www.youtube.com/watch?v=cRgB0sU_IpI",
    link: "#",
  }
];

const creativeWorks: Record<string, CreativeWork[] | Video[]> = {
  Applications: [
    {
      title: "RichLaughify",
      description: "Developed a website, mobile app and video for a hackathon",
      image:
        "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/Screenshot%202024-12-11%20at%2011.03.39%20PM.png",
      link: "https://devpost.com/software/richlaughify",
    },
    {
      title: "iSight Eyecare",
      description:
        "Developed a website in webflow for a boutique Optometry Business",
      image:
        "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/app4.webp",
      link: "#",
    },
    {
      title: "Detective Murder Mystery Game",
      description: "An interactive web game built with React.js (in beta)",
      image:
        "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/app6.webp",
      link: "#",
    },
    {
      title: "School Finder",
      description:
        "An app developed for finding universities in Canada for the Canada Open Data Hackathon (currently being redesigned)",
      image:
        "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/app3.webp",
      link: "#",
    },
  ],
  Videography: videoProjects,
   "Design Ventures": [
    {
      title: "UofA Science Week",
      description:
        "Created the Official logo & promotional ads for University of Alberta's Science Week",
      image: "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/shirt-1.webp",
      link: "",
    },
    {
      title: "Crestwood School Mural Painting",
      description:
        "Designed and painted an 8' x 10' mural for Crestwood School",
      image: "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/design1.webp",
      link: "",
    },
    {
      title: "Faculty of Engineering Newsletter",
      description:
        "Editorial designer for the Faculty of Engineering at the University of Alberta",
      image: "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/Screenshot%202024-12-11%20at%2011.28.46%20PM.png",
      link: "",
    },
    {
      title: "Faculty of Arts Exhibition",
      description:
        "Editorial designer for the Faculty of Arts at the University of Alberta",
      image: "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/editorial4.jpg",
      link: "",
    },
    {
      title: "Faculty of Arts Exhibition",
      description:
        "Editorial designer for the Faculty of Arts at the University of Alberta",
      image: "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/editorial5.jpg",
      link: "",
    },
    {
      title: "Faculty of Arts Exhibition",
      description:
        "Editorial designer for the Faculty of Arts at the University of Alberta",
      image: "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/editorial6.jpg",
      link: "",
    },
    {
      title: "Faculty of Arts Exhibition",
      description:
        "Editorial designer for the Faculty of Arts at the University of Alberta",
      image: "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/editorial8.jpg",
      link: "",
    },
    {
      title: "Faculty of Arts Exhibition",
      description:
        "Editorial designer for the Faculty of Arts at the University of Alberta",
      image: "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/editorial10.jpg",
      link: "",
    },
    {
      title: "Faculty of Arts Exhibition",
      description:
        "Editorial designer for the Faculty of Arts at the University of Alberta",
      image: "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/editorial11.jpg",
      link: "",
    },
    {
      title: "Medical Research Article",
      description:
        "Scientific illustrator for Dr. Khouloud and colleagues' medical article",
      image: "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/research3.png",
      link: "",
    },
    {
      title: "Feather Lice Database Curation",
      description:
        "Digitally extracted and compiled over 100 Albertan lice specimens into a high-resolution database for the Faculty of Biology at the University of Alberta, facilitating future identification and research",
      image: "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/research2.jpg",
      link: "",
    }
  ],
  "Other Projects": [
    {
      title: "Hackathon",
      description: "Organized a 3 day Sharktank Hackathon",
      image:
        "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/other1.png",
      link: "https://www.linkedin.com/posts/vertical-city_verticalcity-verticalimpression-ugcPost-7110297827179732992-wTkZ?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "Tech Lab",
      description:
        "Planned, designed, and managed the development and installation of a technical wall featuring vendor screens, remote monitoring capabilities, and adjustable installation options.",
      image:
        "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/other2.jpeg",
      link: "",
    },
    {
      title: "Personal Art",
      description: "",
      image:
        "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/hobby1.webp",
      link: "",
    },
    {
      title: "Personal Art",
      description: "",
      image:
        "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/hobby3.webp",
      link: "",
    },
    {
      title: "Personal Art",
      description: "",
      image:
        "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/hobby4.webp",
      link: "",
    },
    {
      title: "Personal Art",
      description: "",
      image:
        "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/hobby5.webp",
      link: "",
    },
    {
      title: "Personal Art",
      description: "",
      image:
        "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/hobby6.webp",
      link: "",
    },
    {
      title: "Personal Art",
      description: "",
      image:
        "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/hobby7.webp",
      link: "",
    },
    {
      title: "Personal Art",
      description: "",
      image:
        "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/hobby8.webp",
      link: "",
    },
    {
      title: "Personal Art",
      description: "",
      image:
        "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/hobby9.webp",
      link: "",
    },
  ],
};

const skills: SkillSet[] = [
  {
    category: "Development",
    items: ["TypeScript", "React JS", "Next JS", "Ruby on Rails", "Redux"],
  },
  {
    category: "Design",
    items: ["Figma", "Adobe CC", "UI/UX", "Design Systems"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Jest", "REST APIs"],
  },
];

const Main: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("dev");
  const [activeGallery, setActiveGallery] = useState<string>("Applications");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { isDark } = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300
      ${isDark ? "bg-[#0a0a0a] text-white" : "bg-white text-gray-900"}`}
    >
      <div className="fixed inset-0 -z-10">
        <div
          className={`absolute inset-0 ${isDark ? "bg-[#0a0a0a]" : "bg-white"}`}
        />
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <nav className="max-w-6xl mx-auto flex justify-between items-center py-8 px-4">
        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Kimberly Wu
        </div>
        <div className="flex items-center gap-6">
          {[FiGithub, FiLinkedin,FiMail].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className={`${
                isDark
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }
                transition-colors transform hover:scale-110 duration-200`}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 mt-28">
      <section className="mb-20 flex flex-col md:flex-row items-center gap-12">
          <div
            className={`flex-1 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h1 className="text-6xl md:text-4xl font-bold mb-6 leading-tight">
              hello world! 👋
              <br />
            </h1>

            <h1>
              <span className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                I'm Kim.
              </span>
            </h1>
            <p
              className={`${
                isDark ? "text-gray-400" : "text-gray-600"
              } mt-3 text-xl md:text-2xl max-w-2xl mb-3`}
            >
              Software Engineer & Designer
            </p>
            <p
              className={`${
                isDark ? "text-gray-400" : "text-gray-600"
              } text-xl md:text-2xl max-w-2xl mb-8`}
            >
              Recepient of the Meiya Reinking & District of Edmonton Art Award
            </p>
            <div className="flex gap-4">
              <button className="group flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-all text-lg">
                View Resume
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className={`group flex items-center gap-2 px-6 py-3 rounded-full transition-all text-lg
                ${
                  isDark
                    ? "bg-gray-800 text-white hover:bg-gray-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Contact Me
              </button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-75" />
              <div
                className={`absolute inset-1 rounded-full ${
                  isDark ? "bg-[#0a0a0a]" : "bg-white"
                }`}
              />
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <img
                  src="https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/profile.webp"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow -z-10" />
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillSet) => (
              <div
                key={skillSet.category}
                className={`p-6 rounded-xl ${
                  isDark ? "bg-gray-900/50" : "bg-gray-50"
                }`}
              >
                <h3 className="text-xl font-semibold mb-4">
                  {skillSet.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-base
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

        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {["dev", "creative"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-base font-medium transition-all
                ${
                  activeTab === tab
                    ? "bg-indigo-600 text-white"
                    : `${
                        isDark
                          ? "bg-gray-900 text-gray-400 hover:bg-gray-800"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`
                }`}
            >
              {tab === "dev" ? "Development" : "Creative Works"}
            </button>
          ))}
        </div>

        {activeTab === "dev" ? (
          <section className="grid grid-cols-1 gap-8">
            {devProjects.map((project, index) => (
              <div
                key={index}
                className={`group backdrop-blur-sm rounded-2xl overflow-hidden transition-all
            ${
              isDark
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
                    ></div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.color} mb-6 flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform`}
                    >
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p
                      className={`${
                        isDark ? "text-gray-400" : "text-gray-600"
                      } text-lg mb-6`}
                    >
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <p
                        className={`text-lg ${
                          isDark ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        {project.tech}
                      </p>
                      <div className="flex gap-4">
                        <a
                          href={project.link}
                          className="text-gray-400 hover:text-indigo-500 transition-colors"
                        >
                          <FiExternalLink size={24} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        ) : (
          <section>
            <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
              {Object.keys(creativeWorks).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveGallery(category)}
                  className={`px-6 py-2 rounded-full text-base font-medium transition-all
                    ${
                      activeGallery === category
                        ? "bg-indigo-600 text-white"
                        : `${
                            isDark
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
                {(creativeWorks[activeGallery] as CreativeWork[]).map((work, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl aspect-square"
                  >
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
                      {work.link.length>0 ? (
                        <a
                          href={work.link}
                          className="mt-4 inline-flex items-center text-white gap-2 text-base"
                        >
                          View Project <FiArrowRight />
                        </a>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        <footer className="mt-20 text-center pb-8">
          <p
            className={`${isDark ? "text-gray-400" : "text-gray-600"} text-lg`}
          >
            Open for collaborative projects —{" "}
            <a
              href="mailto:kim.jokwah@gmail.com"
              className="text-indigo-600 hover:text-indigo-700"
            >
              kim.jokwah@gmail.com
            </a>
          </p>
        </footer>
      </main>

      <div
        className={`p-3 text-center font-light text-sm tracking-wide text-lg  ${
          isDark ? "text-gray-400 bg-black" : "text-gray-600 bg-white"
        }`}
      >
        This site was designed in Figma, coded in Next JS by yours truly, styled with
        Tailwind and deployed on Vercel.
      </div>
      <ThemeToggle />
    </div>
  );
}

export default Main;
