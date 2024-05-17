import app1 from "../../public/22.jpg";
import app2 from "../../public/22.jpg";
import app3 from "../../public/22.jpg";

export const workData = [
  {
    title: "Campaign Proposal CMS",
    description: "Develope a user experience for a large scale application",
    type: "Desktop Application",
    imageUrl: app1,
    skills: ["Figma", "React", "Redux Forms", "Ruby on Rails"],
    tags: ["Product Designer", "Full Stack Developer"],
    bg: "bg-zinc-50",
    tagsBg: "bg-zinc-400",
    bgHover: "hover:bg-zinc-200",
  },
  {
    title: "Interactive Map for Property Campaign",
    type: "Progressive Mobile Application",
    description: "How can we improve Canada data for users across Canada",
    imageUrl: app2,
    skills: ["Figma", "React", "Ruby on Rails"],
    tags: ["Mobile", "React Native", "Product Design"],
    bg: "bg-zinc-50",
    tagsBg: "bg-zinc-400",
    bgHover: "hover:bg-zinc-200",
  },
] as const;

export const caseStudyData = [
  {
    title: "Screen Review",
    description: "Develope a user experience for a large scale application",
    type: "Desktop Application",
    imageUrl: app1,
    skills: ["Figma", "React", "Redux Forms", "Ruby on Rails"],
    tags: ["Product Designer", "Full Stack Developer"],
    bg: "bg-zinc-50",
    tagsBg: "bg-zinc-400",
    bgHover: "hover:bg-zinc-200",
  },
  {
    title: "IMBD Case Study",
    type: "Progressive Mobile Application",
    description: "How can we improve Canada data for users across Canada",
    imageUrl: app2,
    skills: ["Figma", "React", "Ruby on Rails"],
    tags: ["Mobile", "React Native", "Product Design"],
    bg: "bg-zinc-50",
    tagsBg: "bg-zinc-400",
    bgHover: "hover:bg-zinc-200",
  },
  {
    title: "Canadian School Picker",
    type: "Progressive Mobile Application",
    description: "How can we improve Canada data for users across Canada",
    imageUrl: app2,
    skills: ["Figma", "React", "Ruby on Rails"],
    tags: ["Mobile", "React Native", "Product Design"],
    bg: "bg-zinc-50",
    tagsBg: "bg-zinc-400",
    bgHover: "hover:bg-zinc-200",
  },
] as const;

export const researchWorkData = [
  {
    title: "Medical Research Illustrator",
    description: "Artist, designed the portfolio for a research paper",
    type: "Desktop Application",
    imageUrl: app1,
    skills: ["Photoshop"],
    tags: ["In House Illustrator"],
    bg: "bg-violet-500",
    tagsBg: "bg-violet-200",
    bgHover: "bg-violet-300",
  },
  {
    title: "Colledge Data Sharing",
    type: "Mobile Application",
    description: "How can we improve Canada data for users across Canada",
    imageUrl: app2,
    skills: ["Figma", "React", "Redux Forms", "Ruby on Rails"],
    tags: ["Mobile", "React Native", "Product Design"],
    tagsBg: "bg-violet-10",
    bg: "bg-violet-50",
    bgHover: "bg-violet-300",
  },
  {
    title: "Colledge Data Sharing",
    type: "Mobile Application",
    description: "How can we improve Canada data for users across Canada",
    imageUrl: app2,
    skills: ["Figma", "React", "Redux Forms", "Ruby on Rails"],
    tags: ["Mobile", "React Native", "Product Design"],
    tagsBg: "bg-violet-10",
    bg: "bg-violet-50",
    bgHover: "bg-violet-300",
  },
] as const;

export const designTools = [
  "Figma", "Sketch",
  "AdobePhotoshop/Illustrator/After Effects",
  "Clip Studio",
  "Paint Tool Sai",
] as const;


export const technicalSkills = [
  "Next.js",
  "React.Js",
  "Redux",
  "TypeScript",
  "Ruby on Rails",
  "GraphQL",
  "Python",
  "C#",
  "Tailwind",
  "AntDesign/Material UI/Bootstrap",
  "CSS/Sass/BEM",
] as const;

export const technicalTools = ["Heroku", "GCS", "AWS", "Git", ...designTools] as const;

