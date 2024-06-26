import flair from "../../public/flair.jpg";
import vProperties from "../../public/vProperties.jpg";
import vsElevator from "../../public/vsElevator.jpg"
import vcAds from "../../public/vcAds.jpg"
import banner2 from "../../public/banner2.png"
import banner1 from "../../public/banner3.png"
import banner3 from "../../public/banner1.png"
import banner4 from "../../public/banner4.png"



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
  url:string;
  bgHover: string;
}
export const workData: Work[] = [
  {
    title: "Flair Airlines Case Study",
    type: "Progressive Mobile Application",
    description: "Case study for examining ways to improve the onboarding user experience for fliers",
    imageUrl: banner4,
    skills: ["Figma", "Miro"],
    tags: ["Mobile", "React Native", "Product Design"],
    bg: "bg-zinc-50",
    tagsBg: "bg-zinc-400",
    bgHover: "hover:bg-zinc-200",
    url:"/flairStudy"
  },
  {
    title: "Digital Elevator and Lobby Screen Displays",
    type: "Progressive Web Application",
    description: "Designed and developed the screen application for Elev8.",
    imageUrl: banner1,
    skills: ["Figma", "Typescript", "React JS"],
    tags: ["Mobile", "React Native", "Product Design"],
    bg: "bg-zinc-50",
    tagsBg: "bg-zinc-400",
    bgHover: "hover:bg-zinc-200",
    url:"https://www.verticalcity.com/elev8"
  },
  {
    title: "Advertiser Platform for Campaign Creation",
    type: "Web Application",
    description: "Developed a platform to which allows media buyers to create campaigns online",
    imageUrl: banner3,
    skills: ["Figma", "React JS", "Javascript", "Ruby on Rails"],
    tags: ["Mobile", "React Native", "Product Design"],
    bg: "bg-zinc-50",
    tagsBg: "bg-zinc-400",
    bgHover: "hover:bg-zinc-200",
    url:"https://www.verticalimpression.com"
  },
  {
    title: "Content Management System for Property Managers",
    type: "Web Application",
    description: "Developed a platform that allows property managers to post notices and news feeds to elevators and lobby screens",
    imageUrl: banner2,
    skills: ["Figma", "React JS", "Javascript", "Ruby on Rails"],
    tags: ["Mobile", "React Native", "Product Design"],
    bg: "bg-zinc-50",
    tagsBg: "bg-zinc-400",
    bgHover: "hover:bg-zinc-200",
    url:"https://www.verticalcity.com/screen-solutions"
  },
] as const;

export const caseStudyData:Work[] = [
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

