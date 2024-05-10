import { describe } from "node:test";
import p1 from "../../public/placeholder.png";
import shirt1 from "../../public/shirt-1.jpg";
import shirt2 from "../../public/shirt-2.jpg";
import shirt3 from "../../public/shirt-3.jpg";

export const webappData = [
  {
    title: "Doctors Plus Website",
    url: p1,
    description: "Doctors Plus Data",
  },
  {
    title: "mockups",
    url: p1,
    description: "Cultr Website",
  },
];

export const designData = [
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
    title: "Medical Lab Logo",
    url: p1,
    description: "Logo used for MLS at the University of Alberta Hospital",
  },
  {
    title: "Mural for Crestwoodd Elimentary School",
    url: p1,
    description: "Crestwoood mUral",
  },
  {
    title: "Harry Ainlay Cover",
    url: p1,
    description: "Crestwoood mUral",
  },
];

export const researchData = [
  {
    title: "Lice Research Data",
    url: p1,
    description: "Data for lice research",
  },
  {
    title: "Medical Research paper",
    url: p1,
    description: "Medical Resarch",
  },
];

export const editorialsData = [
  ...researchData,
  {
    title: "Faculty of Art Editorial",
    url: p1,
    description: "Editorials for Faculty for Art",
  },
  {
    title: "Faculty of Art Editorial",
    url: p1,
    description: "Editorials for Faculty for Art",
  },
  {
    title: "Faculty of Art Editorial",
    url: p1,
    description: "Editorials for Faculty for Art",
  },
  {
    title: "Engineer Editorial",
    url: p1,
    description: "Paper for Engineer",
  },
  {
    title: "Engineer Editorial",
    url: p1,
    description: "Paper for Engineer",
  },
  {
    title: "Engineer Editorial",
    url: p1,
    description: "Paper for Engineer",
  },
  {
    title: "Engineer Editorial",
    url: p1,
    description: "Paper for Engineer",
  },
];

export const videoData = [
  {
    title: "University of Alberta Orientation || ",
    url: "https://www.youtube.com/watch?v=75c2_TTHWYc",
    description:
      "Directed and produced the orientation video for the faculty of science",
  },
  {
    title: "University of Alberta Orientation |",
    url: "https://www.youtube.com/watch?v=3qGofRsp6nc",
    description:
      "Directed and produced the orientation video for the faculty of science.",
  },
  {
    title: "Draw My Life",
    url: "https://www.youtube.com/watch?v=N4UTFSjxV9U",
    description:
      "Made a draw my life. Yes, I drew all that in 2 weeks and yes, that's my voice",
  },
  {
    title: "Games",
    url: "https://www.youtube.com/watch?v=N4UTFSjxV9U",
    description: "AWards: One best video for game. Game video promo",
  },
  {
    title: "Kaye Institute Promotional",
    url: "https://www.youtube.com/watch?v=cRgB0sU_IpI",
    description: "Editor for promo video",
  },
  {
    title: "StoryHoard",
    url: "https://www.youtube.com/watch?v=3J25JH9TEEo",
    description: "Made a funny advertismenet for our app in Unviersity",
  },
] as const;

export const hobbyData = [
  {
    title: "IB Arts ",
    url: p1,
    description: "Protoflios for Art IB",
  },
  {
    title: "Artist Conventions",
    url: p1,
    description: "I like drawing and conventioning!",
  },
  {
    title: "District Art Award of Edmonton",
    url: p1,
    description: "District of Art",
  },
  {
    title: "Mural for Crestwoodd Elimentary School",
    url: p1,
    description: "Crestwoood mUral",
  },
  {
    title: "Harry Ainlay Cover",
    url: p1,
    description: "Crestwoood mUral",
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
    description: "I've been involved with many fun and incredibly creative pursuits from music videos to animations",

    data: videoData,
  },
  editorials: {
    label: "Design",
    description: "I do a lot of design ranging from editorials to compeitions",
    data: editorialsData,
  },
  // design: {
  //   label: "Design Work",
  //   data: designData,
  // },
  traditional: {
    label: "Hobby",
    description: "I do a lot of design ranging from editorials to compeitions",

    data: hobbyData,
  },
} as const;

export const featuredPlaygroundProjects = [
  {
    title: "AI project",
    url: p1,
    description:
      "Directed and produced the orientation video for the faculty of science",
  },
  {
    title: "UI Review",
    url: p1,
    description:
      "Directed and produced the orientation video for the faculty of science.",
  },
] as const;
