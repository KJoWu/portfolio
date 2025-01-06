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
      "Founder of LeetNight, a way to connect coding enthusiasts for collaborative LeetCode problem-solving. This organization is proudly supported by Dev Edmonton Society",
    tech: "NextJS, Tailwind, Leadership, Community",
    color: "from-purple-500 to-purple-400",
    link: "https://www.leetnight.com",
    github: "",
    image:
      "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/5.jpg",
  },
  {
    title: "Flair Airlines Case Study",
    description:
      "Conducted a case study exploring ways to enhance the onboarding user experience for flyers",
    tech: "Figma, Miro",
    color: "from-blue-600 to-blue-500",
    link: "/flairStudy",
    github: "#",
    image:
      "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/flair.jpg",
  },
  {
    title: "Digital Signage for Elevators",
    description:
      "Designed and developed a screen application that displays campaigns from media buyers and notices from property managers on elevator and lobby screens",
    tech: "Figma, Typesript, ReactJS",
    color: "from-green-500 to-green-400",
    link: "https://www.verticalcity.com/elev8",
    github: "#",
    image:
      "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/2.jpg",
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
      "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/3.jpg",
  },
  {
    title: "Content Management System for Property Managers",
    description:
      "Developed a platform enabling property managers to publish notices, news feeds, and various content on elevator and lobby screens",
    tech: "React,Ruby on Rails, TypeScript, Figma",
    color: "from-blue-600 to-blue-600",
    link: "#",
    github: "https://www.verticalimpression.com/",
    image:
      "https://vyefnififypgtaykhppx.supabase.co/storage/v1/object/public/Media/1.jpg",
  },
];
