export type Project = {
  title: string;
  description: string;
  tags: string;
  color: string;
  link: string;
  github: string;
  image: string;
};

export const devProjects: Project[] = [
  {
    title: "Lead UX Engineer for Repacket",
    description:
      "Served as Lead UX Engineer and Frontend Developer, driving the redesign and development of multiple client-facing experiences and core platform interfaces in preparation for launch.",
    tags: "Lead UX Engineer | Frontend Developer | Product Design | React | TypeScript | AI",
    color: "from-emerald-500 to-teal-400",
    link: "https://www.repacket.com",
    github: "",
    image: "/repacketLogo.png",
  },
  {
    title: "DevRel Ambassador for Aleo",
    description:
      "Led North American workshops to promote privacy-focused blockchain development. Created marketing assets (Canva, Photoshop) to boost brand visibility. Partnered with groups such as Google Developer Groups & Edmonton Unlimited, securing 100+ RSVPs/event.",
    color: "from-gray-500 to-gray-400",
    tags: "Aleo (Leo) | ZKP Advocacy | Event Coordinator | Marketing | Workshop Architect | DevRel Strategist | Technical Storyteller",
    github: "",
    link:"https://aleo.org/",
    image: "/logo1.png",
  },
  {
    title: "Social Media Strategist",
    description:"Coordinated, conducted and produced interviews with Aleo grantees/partners. Created viral short-form videos relating to ZKP. Launched and grew social channels (Twitter, TikTok, Instagram, YouTube, Telegram) to boost ecosystem visibility. ",
    color: "from-yellow-500 to-yellow-400",
    tags: "Content Strategy | Community Growth | Viral + Technical Storytelling | Brand Amplification",
    link: "https://linktr.ee/aleo.builders.community",
    github: "",
    image: "/Interviews.png",
  },
  {
    title: "Founder of LeetNight",
    description:
      "Founder of LeetNight, a platform dedicated to connecting coding enthusiasts for collaborative LeetCode problem-solving through workshops, lectures, and guest speaker events. This initiative is proudly supported by the Dev Edmonton Society.",
    tags: "Community Tech Lead: NextJS, Tailwind | Leadership | Developer Community Growth",
    color: "from-purple-500 to-purple-400",
    link: "https://www.leetnight.com",
    github: "",
    image: "/logo4.png",
  },
  {
    title: "Flair Airlines Case Study",
    description:
      "Conducted a case study exploring ways to enhance the onboarding user experience for flyers",
    tags: "UX/UI Developer | Case Study | User Experience Researcher | Figma | Photoshop | Miro",
    color: "from-green-400 to-green-400",
    link: "/flairStudy",
    github: "#",
    image: "/project33.jpg",
  },
  {
    title: "Digital Signage for Elevators for Vertical Impression",
    description:
      "Created and implemented a screen application for showcasing media buyer campaigns and property manager notifications on elevator and lobby displays",
    tags: "Frontend Developer | Figma | Typescript | ReactJS | Tailwind",
    color: "from-orange-400 to-amber-500",
    link: "https://www.verticalcity.com/elev8",
    github: "#",
    image: "/logo3.png",
  },
  {
    title: "Media Buyer Platform for DOOH Campaigns for Vertical City",
    description:
      "Developed a platform enabling media buyers to create online campaigns for digital out-of-home advertising",
    tags: "Full Stack Developer | React,TypeScript | Heroku | Ruby on Rails | AWS/GCP | Tailwind | Figma",
    color: "from-rose-500 to-pink-500",
    link: "https://www.verticalimpression.com",
    github: "#",
    image: "/project11.jpg",
  },
  {
    title: "Content Management System for Property Managers for Vertical City",
    description:
      "Developed a platform enabling property managers to publish notices, news feeds, and various content on elevator and lobby screens",
    tags: "Full Stack Developer | React,Ruby on Rails | Heroku | AWS/GCP | TypeScript | Tailwind | Figma",
    color: "from-blue-600 to-sky-600",
    link: "#",
    github: "https://www.verticalimpression.com/",
    image: "/Logo2.png",
  },
];
