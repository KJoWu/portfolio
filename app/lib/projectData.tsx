import p1 from "../../public/isight.png";
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
import { StaticImageData } from "next/image";

export type ProjectType = keyof typeof projects;

export interface ProjectData {
  title: string;
  description: string;
  url: string | StaticImageData;
  contain?: boolean;
}

export interface VideoProjectData {
  title: string;
  url: string;
  description: string;
  contain?: boolean;
}

export interface ProjectCategory {
  label: string;
  description: string;
  data: ProjectData[] | VideoProjectData[];
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

];

export const webappData: ProjectData[] = [
  {
    title: "Hi Ai",
    url: p1,
    description: "An AI-powered chatbox in TypeScript using Next.js for the frontend, Vercel for deployment, and OpenAI API for conversational intelligence",
  },
  {
    title: "iSight Eyecare",
    url: p1,
    description: "Developed a website in webflow for a boutique Optometry Business",
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

];

export const designData: ProjectData[] = [
  {
    title: "UofA Science Week",
    url: shirt1,
    contain: true,
    description:
      "Created the Official logo & promotional ads for University of Alberta's Science Week",
  },
  {
    title: "Kids Help Phone",
    url: shirt2,
    contain: true,
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
    description: "Digitally extracted and compiled over 100 Albertan lice specimens into a high-resolution database for the Faculty of Biology at the University of Alberta, facilitating future identification and research.    ",
    contain: true,
  }
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
      "Directed and produced the orientation  video for the Faculty of Science at the University of Alberta",
  },
  {
    title: "University of Alberta Orientation |",
    url: "https://www.youtube.com/watch?v=3qGofRsp6nc",
    description:
      "Directed and produced the orientation video for the Faculty of Science at the University of Alberta",
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
    description: "Organized and ran a two-day virtual Shark Tank-themed hackathon, also winning the fan favorite award for the app.",
  },
  {
    title: "Tech Lab",
    url: hobby4,
    description: "Planned, designed, and managed the development and installation of a technical wall featuring vendor screens, remote monitoring capabilities, and adjustable installation options.",
  },
];

export const hobbyData: ProjectData[] = [
  {
    title: "",
    url: hobby3,
    contain: true,
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
    contain: true,
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
    label: "Web Applications",
    shortLabel:"Apps",
    description: "I am an avid supporter of hackathons, actively participate in volunteer work, and love experimenting with new technology stacks to enhance my technical skills. Additionally, I frequently attend tech meetups to network with other professionals and stay updated with industry trends.",
    data: webappData,
  },
  video: {
    label: "Videography Work",
    shortLabel:"Videos",
    description:
      "I've been involved in many fun and incredibly creative pursuits, ranging from music videos to animations.",
    data: videoData,
  },
  editorials: {
    label: "Design Ventures",
    shortLabel:"Design",
    description: "I enjoy taking on a variety of design projects, including producing editorials, creating eye-catching promotional materials, and illustrating graphics for corporate businesses and organizations.",
    data: editorialsData,
  },
  nonCode: {
    label: "Non-dev Projects",
    shortLabel:"Non-dev",
    description: "I've tackled a few non-development related tasks that pushed me out of my comfort zone, taught me a lot, and were surprisingly fun.",
    data: otherData,
  },
  traditional: {
    label: "Artistic Endeavors",
    shortLabel:"My Art",
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
