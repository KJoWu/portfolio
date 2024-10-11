import banner2 from "../../public/banner2.png"
import banner1 from "../../public/banner3.png"
import banner3 from "../../public/banner1.png"
import banner4 from "../../public/banner4.png"
import banner5 from "../../public/banner5.png"



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
  url: string;
  buttonDescription: string;
  bgHover: string;
  buttonColor: string;
  backgroundColor: string;
}
export const workData: Work[] = [
  {
    title: "LeetNight: Solving LeetCode Together for Coding Enthusiasts",
    type: "Organization",
    buttonDescription: "View Site",
    description: "Cofounded LeetNight, a way to connect coding enthusiasts for collaborative LeetCode problem-solving. This organization is proudly supported by Dev Edmonton Society",
    imageUrl: banner5,
    skills: ["Next JS", "Tailwind", "Leadership"],
    tags: ["Organization", "Desktop Application"],
    bg: "bg-zinc-50",
    tagsBg: "bg-zinc-400",
    bgHover: "hover:bg-zinc-200",
    url: "https://www.leetnight.com/elev8",
    buttonColor: "#313630",
    backgroundColor: "#c1ffaa"
  },
  {
    title: "Flair Airlines Case Study:  Improving Onboarding User Experience for Flyers",
    type: "Progressive Mobile Application",
    buttonDescription: "Read case study",
    description: "Conducted a case study exploring ways to enhance the onboarding user experience for flyers",
    imageUrl: banner4,
    skills: ["Figma", "Miro"],
    tags: ["Mobile", "React Native", "Product Design"],
    bg: "bg-zinc-50",
    tagsBg: "bg-zinc-400",
    bgHover: "hover:bg-zinc-200",
    url: "/flairStudy",
    buttonColor: "#313630",
    backgroundColor: "#c1ffaa"
  },
  {
    title: "Developing Digital Signage to Elevate User Experience",
    type: "Progressive Web Application",
    buttonDescription: "View product",
    description: "Designed and developed a screen application that displays campaigns from media buyers and notices from property managers on elevator and lobby screens",
    imageUrl: banner1,
    skills: ["Figma", "Typescript", "React JS"],
    tags: ["Mobile", "React Native", "Product Design"],
    bg: "bg-zinc-50",
    tagsBg: "bg-zinc-400",
    bgHover: "hover:bg-zinc-200",
    url: "https://www.verticalcity.com/elev8",
    buttonColor: "#123156",
    backgroundColor: "#f2f9ff"


  },
  {
    title: "Creating a Platform for Media Buyers to Create DOOH Campaigns",
    type: "Web Application",
    buttonDescription: "View product",
    description: "Developed a platform enabling media buyers to create online campaigns for digital out-of-home advertising (DOOH)",
    imageUrl: banner3,
    skills: ["Figma", "React JS", "Javascript", "Ruby on Rails"],
    tags: ["Mobile", "React Native", "Product Design"],
    bg: "bg-zinc-50",
    tagsBg: "bg-zinc-400",
    bgHover: "hover:bg-zinc-200",
    url: "https://www.verticalimpression.com",
    buttonColor: "#e81331",
    backgroundColor: "#fffeef"

  },
  {
    title: "Developing a Content Management System for Property Managers",
    type: "Web Application",
    buttonDescription: "View product",
    description: "Developed a platform enabling property managers to publish notices, news feeds, and various content on elevator and lobby screens",
    imageUrl: banner2,
    skills: ["Figma", "React JS", "Javascript", "Ruby on Rails"],
    tags: ["Mobile", "React Native", "Product Design"],
    bg: "bg-zinc-50",
    tagsBg: "bg-zinc-400",
    bgHover: "hover:bg-zinc-200",
    url: "https://www.verticalcity.com/screen-solutions",
    buttonColor: "#654aff",
    backgroundColor: "#f4f2ff"


  },
] as const;

export const caseStudyData: Work[] = [
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

