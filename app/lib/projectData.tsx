import p1 from "../../public/placeholder.png";
import shirt1 from "../../public/shirt-1.jpg";
import shirt2 from "../../public/shirt-2.jpg";
import shirt3 from "../../public/shirt-3.jpg";
import research1 from "../../public/research1.webp";
import research2 from "../../public/research2.jpg";
import research3 from "../../public/research3.png";
import editorial2 from "../../public/editorial2.png";
import editorial3 from "../../public/editorial3.png";
import editorial4 from "../../public/editorial4.jpg";
import editorial5 from "../../public/editorial5.jpg";
import editorial6 from "../../public/editorial6.jpg";
import editorial8 from "../../public/editorial8.jpg";
import editorial10 from "../../public/editorial10.jpg";
import editorial11 from "../../public/editorial11.jpg";
import design1 from "../../public/design1.webp";
import hobby1 from "../../public/hobby1.webp";
import hobby2 from "../../public/hobby2.webp";
import hobby3 from "../../public/hobby3.webp";
import hobby4 from "../../public/hobby4.jpg";
import hobby5 from "../../public/hobby5.webp";
import hobby6 from "../../public/hobby6.webp";
import hobby7 from "../../public/hobby7.webp";
import app1 from "../../public/app1.jpg";
import app2 from "../../public/app2.png";
// import app3 from "../../public/app3.png";
// import app4 from "../../public/app4.png";
// import app5 from "../../public/app5.png";
import app6 from "../../public/app6.png";
import other1 from "../../public/other1.png";
import {StaticImageData} from "next/image";

export type ProjectType = keyof typeof projects;

export interface ProjectData {
  title: string;
  description: string;
  url: string | StaticImageData;
  contain?: boolean;
}

export interface VideoProjectData{
  title: string;
  url: string; 
  description: string;
  contain?: boolean;
}

export interface ProjectCategory {
  label: string;
  description: string;
  data: ProjectData[]|VideoProjectData[];
}

export interface Projects {
  [key: string]: ProjectCategory;
}

export interface ProjectThumbnailProps {
  projectData: ProjectData;
  selectedOption: SelectedOption;
}

export type SelectedOption =
  | "video"
  | "web"
  | "graphic"
  | "research"
  | "editorials"
  | "nonCode"
  | "traditional";


export const featuredData: ProjectData[] = [
  {
    title: "Hi Ai",
    url: p1,
    description: "Ai Chatbox built in NextJs and Open Ai",
  },
  {
    title: "Bouncing QR Codes",
    url: app2,
    description: "New take on QR codes, won fan favorite. Built with React js",
  },
];

export const webappData: ProjectData[] = [
  {
    title: "Hi Ai",
    url: p1,
    description: "Ai Chatbox built in NextJs and Open Ai",
  },
  {
    title: "Bouncing QR Codes",
    url: app2,
    description: "New take on QR codes, won fan favorite. Built with React js",
  },
  {
    title: "iSight Eyecares",
    url: p1,
    description: "Website developed for a boutique Optometry Business",
  },
  {
    title: "Interactive Property Selector",
    url: app2,
    description: "A property selecting tool using the cluster feature from Mapbox built on React.js",
  },
  {
    title: "Detective Murder Mystery Game",
    url: app6,
    description: "An interactive web game built with React.js",
  },
  {
    title: "Cultr",
    contain: true,
    url: app1,
    description: "Website equipped with a web scraping tool designed to collect data on BCorp corporations. Built with Python and Bootstrap",
  },
];

export const aiData: ProjectData[] = [
  {
    title: "Hi Ai",
    url: p1,
    description: "Ai Chatbox built in NextJs and Open Ai",
  },
  {
    title: "Lorem Ipsum Ai Builder",
    url: p1,
    description: "Extension for fun Lorem Ipsum",
  },
  {
    title: "Color Theory",
    url: app2,
    description: "Extension that allows you to pick colors for a website",
  },
];

export const designData: ProjectData[] = [
  {
    title: "UofA Science Week",
    url: shirt1,
    description:
      "Official logo & design for University of Alberta's Science Week",
  },
  {
    title: "Link Crew",
    url: shirt3,
    description: "Official design for Harry Ainlay's Link Crew",
  },
  {
    title: "Kids Help Phone",
    url: shirt2,
    description: "1st place winning design",
  },
  {
    title: "Crestwood School Mural Painting",
    url: design1,
    description: "Designed and painted an 8' x 10' mural for Crestwood School",
  },
];

export const researchData: ProjectData[] = [
  {
    title: "Medical Research Article",
    url: research3,
    description: "Scientific illustrator for Dr. Khouloud and colleagues' medical article",
  },
  {
    title: "Feather Lice Database Curation",
    url: research1,
    description: "Digitally extracted 100+ Albertan lice specimens, compiling them into a high-resolution database for future identification.",
    contain: true,
  },
  {
    title: "Feather Lice Database Curation",
    url: research2,
    description: "Digitally extracted 100+ Albertan lice specimens, compiling them into a high-resolution database for future identification.",
    contain: true,
  },
];

export const editorialsData: ProjectData[] = [
  ...designData,
  {
    title: "Faculty of Engineering Newsletter ",
    url: editorial3,
    contain: true,
    description: "Editorial designer for the Faculty of Engineering at the University of Alberta",
  },
  {
    title: "Faculty of Engineering Newsletter ",
    url: editorial2,
    contain: true,
    description: "Editorial designer for the Faculty of Engineering at the University of Alberta",
  },
  {
    title: "Faculty of Arts Exhibition",
    url: editorial4,
    contain: true,
    description: "Editorial designer for the Faculty of Arts at the University of Alberta",
  },
  {
    title: "Faculty of Arts Exhibition",
    url: editorial5,
    contain: true,
    description: "Editorial designer for the Faculty of Arts at the University of Alberta",
  },
  {
    title: "Faculty of Arts Exhibition",
    url: editorial6,
    contain: true,
    description: "Editorial designer for the Faculty of Arts at the University of Alberta",
  },
  {
    title: "Faculty of Arts Exhibition",
    url: editorial8,
    contain: true,
    description: "Editorial designer for the Faculty of Arts at the University of Alberta",
  },
  {
    title: "Faculty of Arts Exhibition",
    url: editorial10,
    contain: true,
    description: "Editorial designer for the Faculty of Arts at the University of Alberta",
  },
  {
    title: "Faculty of Arts Exhibition",
    url: editorial11,
    contain: true,
    description: "Editorial designer for the Faculty of Arts at the University of Alberta",
  },
  ...researchData,
];

export const videoData: VideoProjectData[] = [
  {
    title: "University of Alberta Orientation || ",
    url: "https://www.youtube.com/watch?v=75c2_TTHWYc",
    description:
      "Directed and produced the orientation  video for the Faculty of Science",
  },
  {
    title: "University of Alberta Orientation |",
    url: "https://www.youtube.com/watch?v=3qGofRsp6nc",
    description:
      "Directed and produced the orientation video for the Faculty of Science",
  },
  {
    title: "Porphyrius: Draw my Life",
    url: "https://www.youtube.com/watch?v=N4UTFSjxV9U",
    description:
      'Illustrated, voiced and produced a "Draw my Life" animated short',
  },
  // {
  //   title: "Games",
  //   url: "https://drive.google.com/file/d/1ANh6OVhLOYORJFJuokruTSKsj4v5totM/view?usp=sharing",
  //   description: "AWards: One best video for game. Game video promo",
  // },
  {
    title: "Kaye Institute Promotional",
    url: "https://www.youtube.com/watch?v=cRgB0sU_IpI",
    description: "Created the promotional video",
  },
  {
    title: "StoryHoard",
    url: "https://www.youtube.com/watch?v=3J25JH9TEEo",
    description: "Produced a promo for a software engineer class",
  },
];

export const otherData: ProjectData[] = [
  {
    title: "Hackathon",
    url: other1,
    description: "Organized and ran a 2 Day Virtual Shark Tank themed Hackathon (also winning fan favorite for app",
  },
  {
    title: "Technical Wall",
    url: hobby4,
    description: "Planned, designed, built, and oversaw the development and installation of a technical wall for Vertical City",
  },
];

export const hobbyData: ProjectData[] = [
  {
    title: "",
    url: hobby3,
    description: "",
  },
  {
    title: "",
    url: hobby4,
    description: "",
  },
  {
    title: "",
    url: hobby5,
    description: "",
  },
  {
    title: "",
    url: hobby1,
    description: "",
  },
  {
    title: "",
    url: hobby2,
    description: "",
  },
  {
    title: "",
    url: hobby6,
    description: "",
  },
  {
    title: "",
    url: hobby7,
    description: "",
  },
];

export const projects = {
  web: {
    label: "Desktop & Mobile Apps",
    description: "I've been an avid supporter of hackathons",
    data: webappData,
  },
  video: {
    label: "Videography",
    description:
      "I've been involved with many fun and incredibly creative pursuits from music videos to animations",
    data: videoData,
  },
  editorials: {
    label: "Illustrations",
    description: "I enjoy taking on a variety of design projects. This includes producing editorials, creating eye-catching promotional materials and illustrating graphics for corporate businesses and organizations",
    data: editorialsData,
  },
  nonCode: {
    label: "Other",
    description: "List of Non-design/developer work",
    data: otherData,
  },
  traditional: {
    label: "Hobby",
    description: "Art is my passion. I love attending conventions and drawing caricatures of attendees as well as keeping up with the latest games and shows. My tools of choice are Cintiq 24 Pro and a black MUJI 0.5mm pen",
    data: hobbyData,
  },
};

export const featuredPlaygroundProjects: ProjectData[] = [
  {
    title: "AI project",
    url: p1,
    description: "Directed and produced the orientation video for the faculty of science",
  },
  {
    title: "UI Review",
    url: p1,
    description: "Directed and produced the orientation video for the faculty of science.",
  },
];
