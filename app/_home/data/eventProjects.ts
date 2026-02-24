// === TYPE DEFINITIONS ===

export type Video = {
  url: string;
  location: string;
  title: string;
  description: string;
};

export type PortfolioImages = {
  title: string;
  description: string;
  image: string;
  category?: string;
  link: string;
};

export type EventProject = {
  title: string;
  description: string;
  image: string;
  category?: string;
  eventLink: string;
  recapLink: string;
};

type ProjectCategory = EventProject[] | Video[] | PortfolioImages[];

// === DESIGN PROJECTS ===

export const portfolioImages: PortfolioImages[] = [
  /*
  {
    title: "Luma Promotional Designs",
    description: "Developed and designed marketing material for Aleo",
    image: "/EVENT1.avif",
    link: "",
  },
  {
    title: "Luma Promotional Designs",
    description: "Developed and designed marketing material for Aleo",
    image: "/EVENT2.avif",
    link: "",
  },
  */
  {
    title: "Thumbnails for Social Media",
    description: "Created captivating, catchy thhumbnails for videos on TikTok and Instagram",
    image: "/Interviews.png",
    link: "",
  },

  {
    title: "Consensus Promotional Brochures",
    description: "Developed and designed marketing material for Aleo",
    image: "/posteraleo.png",
    link: "",
  },
  {
    title: "Consensus Promotional Brochures",
    description: "Developed and designed marketing material for Aleo",
    image: "/posteraleo2.png",
    link: "",
  },
  {
    title: "Consensus Promotional Brochures",
    description: "Developed and designed marketing material for Aleo",
    image: "/posteraleo3.png",
    link: "",
  },
  {
    title: "EventBrite Promotional Work",
    description: "Developed and designed marketing material for Aleo",
    image: "/bannerevent1.png",
    link: "",
  },
  {
    title: "Promotional Tabloid Brochures",
    description: "Developed and designed marketing posters for LeetNight",
    image: "/baevent1.png",
    link: "",
  },
  {
    title: "Promotional Tabloid Brochures",
    description: "Developed and designed marketing material for Aleo",
    image: "/baevent2.png",
    link: "",
  },
  {
    title: "Community Brochures",
    description: "Developed and designed marketing material for Aleo",
    image: "/ALEO.jpg",
    link: "",
  },
  {
    title: "Meetup Promotional Work",
    description: "Developed and designed marketing material for Aleo",
    image: "/bannerevent6.png",
    link: "",
  },
  {
    title: "EventBrite Promotional Work",
    description: "Developed and designed marketing material for Aleo",
    image: "/bannerevent5.png",
    link: "",
  },
];

// === VIDEO PROJECTS ===

export const videoProjects: Video[] = [
  {
    title: "Aleo Hackathon Consensus 2025",
    description: "Oversaw the planning of a Tech Social event at the Aleo Hackerhouse, including contracting videography to document the experience",
    location: "Consensus, Toronto",
    url: "https://www.youtube.com/watch?v=iJZFsqqu4Vw",

  },
  {
    title: "#BUIDLathon at ETHDenver: 2025 Recap",
    description: "Generated and executed video content during ETHDenver for distribution across YouTube, TikTok, YouTube Shorts, and Instagram.",
    location: "ETHDenver, Denver",
    url: "https://youtu.be/2Jltw6x05lg",
  },
  {
    title: "Aleo at ETHDenver: Builders, Vibes & ZK Things 🔐",
    description: "Generated and executed video content during ETHDenver for distribution across YouTube, TikTok, YouTube Shorts, and Instagram.",
    location: "ETHDenver, Denver",
    url: "https://youtube.com/shorts/S-IpZSX3L8k",
  },
  {
    title: "Full Day Workshops @ ETHDenver",
    description: "Generated and executed video content during ETHDenver for distribution across YouTube, TikTok, YouTube Shorts, and Instagram.",
    location: "ETHDenver, Denver",
    url: "https://www.youtube.com/shorts/o2A3iAlSRDc",
  },
  {
    title: "PLAY3.ai Interview",
    description: "Directed grantee interviews and crafted dynamic video content at ETHDenver, tailored for high engagement across YouTube, TikTok, Shorts, and Instagram",
    location: "ETHDenver, Denver",
    url: "https://www.youtube.com/watch?v=JCghjzYCDSk",

  },
  {
    title: "Humine Interview",
    description: "Directed grantee interviews and crafted dynamic video content at ETHDenver, tailored for high engagement across YouTube, TikTok, Shorts, and Instagram",
    location: "ETHDenver, Denver",
    url: "https://www.youtube.com/watch?v=H9t8YR19stQ",
  },
  {
    title: "Demox Labs Interview",
    description: "Directed grantee interviews and crafted dynamic video content at ETHDenver, tailored for high engagement across YouTube, TikTok, Shorts, and Instagram",
    location: "ETHDenver, Denver",
    url: "https://www.youtube.com/watch?v=49WWQp4aILM",
  },
  {
    title: "Fox Wallet Interview",
    description: "Directed grantee interviews and crafted dynamic video content at ETHDenver, tailored for high engagement across YouTube, TikTok, Shorts, and Instagram",
    location: "ETHDenver, Denver",
    url: "https://www.youtube.com/watch?v=e__LZwaK7wo",
  },
  {
    title: "3oC Interview",
    description: "Directed grantee interviews and crafted dynamic video content at ETHDenver, tailored for high engagement across YouTube, TikTok, Shorts, and Instagram",
    location: "ETHDenver, Denver",
    url: "https://www.youtube.com/shorts/cRxB2HZC07U",
  },
  {
    title: "Predicate Interview",
    description: "Directed grantee interviews and crafted dynamic video content at ETHDenver, tailored for high engagement across YouTube, TikTok, Shorts, and Instagram",
    location: "ETHDenver, Denver",
    url: "https://www.youtube.com/shorts/_yI3qGaGu2k",
  },
  {
    title: "🏰 Inside the $Spork Castle at ETHDenver!",
    description: "Directed grantee interviews and crafted dynamic video content at ETHDenver, tailored for high engagement across YouTube, TikTok, Shorts, and Instagram",
    location: "ETHDenver, Denver",
    url: "https://www.youtube.com/shorts/v3NVNlufZxc",
  },
  {
    title: "🚀 Last Night at ETHDenver: Where Builders Unwind",
    description: "Created fun videos at ETHDenver, tailored for high engagement across YouTube, TikTok, Shorts, and Instagram",
    location: "ETHDenver, Denver",
    url: "https://youtube.com/shorts/efrnHzmjt50",
  },
  {
    title: "Dance Break w/ Pondo @ ETHDenver 🕺🕺🕺",
    description: "Created fun videos at ETHDenver, tailored for high engagement across YouTube, TikTok, Shorts, and Instagram",
    location: "ETHDenver, Denver",
    url: "https://youtube.com/shorts/7ou2uVPAwg4",
  },
];

// === EVENT PROJECTS ===

export const eventProjects: Record<string, ProjectCategory> = {
  "Highlighted Events": [
    {
      title: "Aleo: Tech Social Hackathon Vol.1 ",
      description: "Led end-to-end planning for Aleo’s Tech Social Workshop at Consensus, managing venue, programming, catering, entertainment, videography, marketing, and design",
      image: "/photoevent2.jpg",
      eventLink: "https://lu.ma/17gda80f",
      recapLink: "https://www.linkedin.com/posts/aleohq_zk-web3-aleo-activity-7326705745477926912-2oJI?utm_source=share&utm_medium=member_desktop&rcm=ACoAABbSpBYB-q3t2p0nXRPzDgAbgfAOn1HhtyY",
    },
    {
      title: "Aleo: Tech Social Hackathon Vol.2",
      description: "Led end-to-end planning for Aleo’s Tech Social Workshop at Consensus, managing venue, programming, catering, entertainment, videography, marketing, and design",
      image: "/PhotoEvent4.jpg",
      eventLink: "https://lu.ma/8xw54dsu",
      recapLink: "https://www.linkedin.com/posts/kimberly-wu_consensus-zk-web3-activity-7330555415774007296--gX0?utm_source=share&utm_medium=member_desktop&rcm=ACoAABbSpBYB-q3t2p0nXRPzDgAbgfAOn1HhtyY",
    },
    {
      title: "Aleo: Hackerhouse @ Soho ",
      description: "Engaged with attendees and managed on-site experience while also creating marketing materials to drive event attendance",
      image: "/photoevent.png",
      eventLink: "https://lu.ma/5u2asiiv",
      recapLink: "https://www.linkedin.com/posts/aleohq_consensus2025-activity-7330343178002149377-HNTT?utm_source=share&utm_medium=member_desktop&rcm=ACoAABbSpBYB-q3t2p0nXRPzDgAbgfAOn1HhtyY",
    },
    {
      title: "DevCon Hackathon",
      description: "Judged the DevCon Hackathon on Edmonton Transit, organized by Edmonton Unlimited:Edmonton’s leading tech innovation hub and sponsored by ATB",
      image: "/PhotoEvent7.jpg",
      eventLink: "https://devcon-hackakthon.devpost.com/",
      recapLink: "https://www.linkedin.com/posts/edmonton-unlimited_devconyeg-students-yegtech-ugcPost-7302380743601664003-rAC3?utm_source=share&utm_medium=member_desktop&rcm=ACoAABbSpBYB-q3t2p0nXRPzDgAbgfAOn1HhtyY",
    },
    {
      title: "Aleo: Blockchain Workshop",
      description: "Led hands-on technical workshops on zero-knowledge proofs and their applications, managing everything from content creation and marketing to venue sourcing and full event planning",
      image: "/photoevent30.png",
      eventLink: "https://lu.ma/pynlavu9",
      recapLink: "https://www.linkedin.com/posts/kimberly-wu_blockchain-aleo-web3-activity-7311891147126108161-rs-_?utm_source=share&utm_medium=member_desktop&rcm=ACoAABbSpBYB-q3t2p0nXRPzDgAbgfAOn1HhtyY",
    },
    {
      title: "Aleo + Google Cloud Hackathon for International Woman's Day",
      description: "Co-organized a hackathon with GDG Cloud, serving as a judge and mentor for the Aleo track",
      image: "/PhotoEvent20.jpg",
      eventLink: "https://www.linkedin.com/posts/google-developer-group-gdg-cloud-edmonton_yeg-yegtech-abtech-activity-7313251381514051585-uWX8?utm_source=share&utm_medium=member_desktop&rcm=ACoAABbSpBYB-q3t2p0nXRPzDgAbgfAOn1HhtyY",
      recapLink: "https://www.linkedin.com/posts/kimberly-wu_internationalwomensday-womenintech-hackathon-activity-7312886029240135680-6_pL?utm_source=share&utm_medium=member_desktop&rcm=ACoAABbSpBYB-q3t2p0nXRPzDgAbgfAOn1HhtyY",
    },
    {
      title: "LeetNight Vol.3",
      description: "Hosted community coding nights featuring developer talks, social networking, and LeetCode practice for interview preparation",
      image: "/PhotoEvent33.png",
      eventLink: "https://lu.ma/jm05kzj8",
      recapLink: "https://www.linkedin.com/posts/leetnight_leetnight-yeg-community-activity-7296000597848113154--kn1?utm_source=share&utm_medium=member_desktop&rcm=ACoAABbSpBYB-q3t2p0nXRPzDgAbgfAOn1HhtyY",
    },
    {
      title: "LeetNight Vol.2",
      description: "Hosted community coding nights featuring developer talks, social networking, and LeetCode practice for interview preparation",
      image: "/PhotoEvent8.JPG",
      eventLink: "https://lu.ma/7fa5jk9t",
      recapLink: "https://www.linkedin.com/posts/kimberly-wu_leetnight-designpatterns-codingcommunity-activity-7260860582738735104-ROCp?utm_source=share&utm_medium=member_desktop&rcm=ACoAABbSpBYB-q3t2p0nXRPzDgAbgfAOn1HhtyY",
    },
  ],
  Videography: videoProjects,
  "Design": portfolioImages,
};
