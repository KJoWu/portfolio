export type Project = {
  title: string;
  description: string;
  tech: string;
  color: string;
  link: string;
  github: string;
  image: string;
};

export const devProjects: Project[] = [
  {
    title: "LeetNight: Social for Tech Enthusiasts",
    description:
      "Founder of LeetNight, a way to connect coding enthusiasts for collaborative LeetCode problem-solving through workshops, levtures and guest speakers. This organization is proudly supported by Dev Edmonton Society",
    tech: "NextJS, Tailwind, Leadership, Community",
    color: "from-purple-500 to-purple-400",
    link: "https://www.leetnight.com",
    github: "",
    image:
      "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/project2.jpg",
  },
  {
    title: "Flair Airlines Case Study",
    description:
      "Conducted a case study exploring ways to enhance the onboarding user experience for flyers",
    tech: "Figma, Miro",
    color: "from-green-400 to-green-400",
    link: "/flairStudy",
    github: "#",
    image:
      "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/project33.jpg",
  },
  {
    title: "Digital Signage for Elevators",
    description:
      "Created and implemented a screen application for showcasing media buyer campaigns and property manager notifications on elevator and lobby displays",
    tech: "Figma, Typesript, ReactJS",
    color: "from-orange-400 to-amber-500",
    link: "https://www.verticalcity.com/elev8",
    github: "#",
    image:
      "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/project3.jpg",
  },
  {
    title: "Media Buyer Platform for DOOH Campaigns",
    description:
      "Developed a platform enabling media buyers to create online campaigns for digital out-of-home advertising",
    tech: "React,TypeScript, Ruby on Rails, Figma",
    color: "from-rose-500 to-pink-500",
    link: "https://www.verticalimpression.com",
    github: "#",
    image:
      "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/project11.jpg",
  },
  {
    title: "Content Management System for Property Managers",
    description:
      "Developed a platform enabling property managers to publish notices, news feeds, and various content on elevator and lobby screens",
    tech: "React,Ruby on Rails, TypeScript, Figma",
    color: "from-blue-600 to-sky-600",
    link: "#",
    github: "https://www.verticalimpression.com/",
    image:
      "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/project5.jpg",
  },
];
