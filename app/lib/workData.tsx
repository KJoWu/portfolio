import app1 from "../../public/22.jpg";
import app2 from "../../public/22.jpg";
import flair from "../../public/flair.jpg";
import vProperties from "../../public/vProperties.jpg";
import vsElevator from "../../public/vsElevator.jpg"
import vcAds from "../../public/vcAds.jpg"

import { StaticImageData } from "next/image";

export interface Work {
  title: string;
  type: string;
  description: string;
  imageUrl: StaticImageData;
  skills: string[];
  tags: string[];
  bg: string;
  tagsBg: string;
  bgHover: string;
}
export const workData: Work[] = [
  {
    title: "Flair Airlines Case Study",
    type: "Progressive Mobile Application",
    description: "How can we improve the onboarding user experience for fliers",
    imageUrl: flair,
    skills: ["Figma", "Miro"],
    tags: ["Mobile", "React Native", "Product Design"],
    bg: "bg-zinc-50",
    tagsBg: "bg-zinc-400",
    bgHover: "hover:bg-zinc-200",
  },
  {
    title: "Screen Displays for Elevators",
    type: "Progressive Web Application",
    description: "How can we improve Canada data for users across Canada",
    imageUrl: vsElevator,
    skills: ["Figma", "Typescript", "React JS"],
    tags: ["Mobile", "React Native", "Product Design"],
    bg: "bg-zinc-50",
    tagsBg: "bg-zinc-400",
    bgHover: "hover:bg-zinc-200",
  },
  {
    title: "Advertising Platform for Campaign Proposal Creation",
    type: "Web Application",
    description: "How can we improve Canada data for users across Canada",
    imageUrl: vcAds,
    skills: ["Figma", "React JS", "Javascript", "Ruby on Rails"],
    tags: ["Mobile", "React Native", "Product Design"],
    bg: "bg-zinc-50",
    tagsBg: "bg-zinc-400",
    bgHover: "hover:bg-zinc-200",
  },
  {
    title: "Content Management System for Property Managers",
    type: "Web Application",
    description: "How can we improve Canada data for users across Canada",
    imageUrl: vProperties,
    skills: ["Figma", "React JS", "Javascript", "Ruby on Rails"],
    tags: ["Mobile", "React Native", "Product Design"],
    bg: "bg-zinc-50",
    tagsBg: "bg-zinc-400",
    bgHover: "hover:bg-zinc-200",
  },
] as const;

export const caseStudyData:Work[] = [
] as const;

export const researchWorkData: Work[] = [
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

