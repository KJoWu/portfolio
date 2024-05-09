import app1 from "../../public/app1.jpg";
import app2 from "../../public/app2.png";
import app3 from "../../public/app3.jpg";
import p1 from "../../public/placeholder.png";

export const webappData=[
  {
    title: "University of Alberta Orientation || ",
    url:p1,
    description: "Directed and produced the orientation video for the faculty of science"
  },
  {
    title: "University of Alberta Orientation |",
    url:p1,
    description: "Directed and produced the orientation video for the faculty of science.",
  }
]

export const projectsData = [
  {
    title: "Campaign Proposal Content Management System",
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
    title: "Colledge Data Sharing",
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
    title: "Physical Contrusction",
    type: "Mobile Application",
    description: "How can we seamlessly coordinate a lab",
    imageUrl: app3,
    skills: ["Figma", "React", "Redux Forms", "Ruby on Rails"],
    tags: ["Physical Skills"],
    bg: "bg-zinc-50",
    tagsBg: "bg-zinc-400",
    bgHover: "hover:bg-zinc-200",
  },
] as const;

export const researchProjectsData = [
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
  }
] as const;

export const videoData = [
  {
    title: "University of Alberta Orientation || ",
    url:"https://www.youtube.com/watch?v=75c2_TTHWYc",
    description: "Directed and produced the orientation video for the faculty of science"
  },
  {
    title: "University of Alberta Orientation |",
    url:"https://www.youtube.com/watch?v=3qGofRsp6nc",
    description: "Directed and produced the orientation video for the faculty of science.",
  },
  {
    title: "Draw My Life",
    url:"https://www.youtube.com/watch?v=N4UTFSjxV9U",
    description: "Made a draw my life. Yes, I drew all that in 2 weeks and yes, that's my voice",
  },
  {
    title: "Games",
    url:"https://www.youtube.com/watch?v=N4UTFSjxV9U",
    description: "AWards: One best video for game. Game video promo",
  },
  {
    title: "Kaye Institute Promotional",
    url:"https://www.youtube.com/watch?v=cRgB0sU_IpI",
    description: "Editor for promo video",
  },
  {
    title: "StoryHoard",
    url:"https://www.youtube.com/watch?v=3J25JH9TEEo",
    description: "Made a funny advertismenet for our app in Unviersity",
  },
] as const;

export const featuredData = [
  {
    title: "University of Alberta Orientation || ",
    url:p1,
    description: "Directed and produced the orientation video for the faculty of science"
  },
  {
    title: "University of Alberta Orientation |",
    url:p1,
    description: "Directed and produced the orientation video for the faculty of science.",
  }
] as const;

export const technicalSkills = [
  "Next.js",
  "React.Js",
  "Redux",
  "TypeScript",
  "Ruby on Rails",
  "Motion",
  "GraphQL",
  "Python",
  "C#",
  "Tailwind",
  "AntDesign/Material UI/Bootstrap",
  "Css/Sass/BEM",
] as const;

export const technicalTools = ["Heroku", "GCS", "AWS", "Git"] as const;

export const designTools = [
  "Figma",
  "AdobePhotoshop/Illustrator/After Effects",
  "Clip Studio",
  "Paint Tool Sai",
  "Gimp",
] as const;
