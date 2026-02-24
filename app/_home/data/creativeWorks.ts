export type Video = {
  url: string;
  location: string;
  title: string;
  description: string;
};

export type CreativeWork = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export const videoProjects: Video[] = [
  {
    title: "Rich Laughify",
    description: "Designed a video for a hackathon",
    location: "Virtual",
    url: "https://www.youtube.com/watch?v=MRzpy4sC7Go&t=1s",
  },
  {
    title: "University of Alberta Orientation",
    description: "Directed and produced the orientation video for the Faculty of Science at the University of Alberta",
    url: "https://www.youtube.com/watch?v=75c2_TTHWYc&t=145s",
    location: "University of Alberta, Edmonton",
  },
  {
    title: "University of Alberta Orientation",
    description: "Directed and produced the orientation video for the Faculty of Science at the University of Alberta (fun fact, this was filmed with a Macbook)",
    url: "https://www.youtube.com/watch?v=3qGofRsp6nc",
    location: "University of Alberta, Edmonton",
  },
  {
    title: "Porphyrius: Draw my Life",
    description: 'Illustrated, voiced and produced a "Draw my Life" animated short ',
    url: "https://www.youtube.com/watch?v=N4UTFSjxV9U",
    location: "Virtual",
  },
  {
    title: "Kaye Institute Promotional    ",
    description: "Created the promotional video for Kaye Institute    ",
    url: "https://www.youtube.com/watch?v=cRgB0sU_IpI",
    location: "University of Alberta, Edmonton",
  }
];

export const creativeWorks: Record<string, CreativeWork[] | Video[]> = {
  Applications: [
    {
      title: "Winning entry: RichLaughify",
      description: "Developed a website, mobile app and video for a hackathon",
      image:
        "/app333.jpg",
      link: "https://devpost.com/software/richlaughify",
    },
    {
      title: "iSight Eyecare",
      description:
        "Developed a website in webflow for a boutique Optometry Business",
      image:
        "/app4.jpg",
      link: "",
    },
    {
      title: "Detective Murder Mystery Game",
      description: "An interactive web game built with React.js (in beta)",
      image:
        "/app6.jpg",
      link: "",
    },
    {
      title: "School Finder",
      description:
        "An app developed for finding universities in Canada for the Canada Open Data Hackathon (currently being redesigned)",
      image:
        "/app3.jpg",
      link: "",
    },
  ],
  Videography: videoProjects,
  "Design Ventures": [
    {
      title: "UofA Science Week",
      description:
        "Created the Official logo & promotional ads for University of Alberta's Science Week",
      image: "/shirt-1.webp",
      link: "",
    },
    {
      title: "Crestwood School Mural Painting",
      description:
        "Designed and painted an 8' x 10' mural for Crestwood School",
      image: "/design1.webp",
      link: "",
    },
    {
      title: "Faculty of Engineering Newsletter",
      description:
        "Editorial designer for the Faculty of Engineering at the University of Alberta",
      image: "/Screenshot 2024-12-11 at 11.28.46 PM.png",
      link: "",
    },
    {
      title: "Faculty of Arts Exhibition",
      description:
        "Editorial designer for the Faculty of Arts at the University of Alberta",
      image: "/editorial4.jpg",
      link: "",
    },
    {
      title: "Faculty of Arts Exhibition",
      description:
        "Editorial designer for the Faculty of Arts at the University of Alberta",
      image: "/editorial5.jpg",
      link: "",
    },
    {
      title: "Faculty of Arts Exhibition",
      description:
        "Editorial designer for the Faculty of Arts at the University of Alberta",
      image: "/editorial6.jpg",
      link: "",
    },
    {
      title: "Faculty of Arts Exhibition",
      description:
        "Editorial designer for the Faculty of Arts at the University of Alberta",
      image: "/editorial8.jpg",
      link: "",
    },
    {
      title: "Faculty of Arts Exhibition",
      description:
        "Editorial designer for the Faculty of Arts at the University of Alberta",
      image: "/editorial10.jpg",
      link: "",
    },
    {
      title: "Faculty of Arts Exhibition",
      description:
        "Editorial designer for the Faculty of Arts at the University of Alberta",
      image: "/editorial11.jpg",
      link: "",
    },
    {
      title: "Medical Research Article",
      description:
        "Scientific illustrator for Dr. Khouloud and colleagues' medical article",
      image: "/research3.png",
      link: "",
    },
    {
      title: "Feather Lice Database Curation",
      description:
        "Digitally extracted and compiled over 100 Albertan lice specimens into a high-resolution database for the Faculty of Biology at the University of Alberta, facilitating future identification and research",
      image: "/research2.jpg",
      link: "",
    }
  ],
  "Other Projects": [
    {
      title: "Hackathon",
      description: "Organized a 3 day Sharktank Hackathon",
      image:
        "/other1.png",
      link: "https://www.linkedin.com/posts/vertical-city_verticalcity-verticalimpression-ugcPost-7110297827179732992-wTkZ?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "Tech Lab",
      description:
        "Planned, designed, and managed the development and installation of a technical wall featuring vendor screens, remote monitoring capabilities, and adjustable installation options.",
      image:
        "/other2.jpeg",
      link: "",
    },
    {
      title: "Personal Art",
      description: "",
      image:
        "/hobby1.webp",
      link: "",
    },
    {
      title: "Personal Art",
      description: "",
      image:
        "/hobby3.webp",
      link: "",
    },
    {
      title: "Personal Art",
      description: "",
      image:
        "/hobby4.webp",
      link: "",
    },
    {
      title: "Personal Art",
      description: "",
      image:
        "/hobby5.webp",
      link: "",
    },
    {
      title: "Personal Art",
      description: "",
      image:
        "/hobby6.webp",
      link: "",
    },
    {
      title: "Personal Art",
      description: "",
      image:
        "/hobby7.webp",
      link: "",
    },
    {
      title: "Personal Art",
      description: "",
      image:
        "/hobby8.webp",
      link: "",
    },
    {
      title: "Personal Art",
      description: "",
      image:
        "/hobby9.webp",
      link: "",
    },
  ],
};
