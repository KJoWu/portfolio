import app1 from "../../public/app1.jpg";
import app2 from "../../public/app2.jpg";
import app3 from "../../public/app3.jpg";


export const projectsData = [
    {
      title: "Advertising Agency",
      description: "Develope a user experience for a large scale application",
      type:"Desktop Application",
      imageUrl:app1,
      tags: ["Product Designer", "Full Stack Developer"]
    },
    {
      title: "Colledge Data Sharing",
      type:"Mobile Application",
      description: "How can we improve Canada data for users across Canada",
      imageUrl:app2,
      tags: ["Mobile", "React Native", "Product Design"]
    },
    {
      title: "Physical Contrusction",
      type:"Mobile Application",
      description: "How can we seamlessly coordinate a lab",
      imageUrl:app3,
      tags: ["Physical Skills"]
    },
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
    "Heroku", 
    "GCS",
    "AWS",
    "Git",
    "Tailwind",
    "AntDesign/Material UI/Bootstrap",
    "Css/Sass/BEM"
  ] as const;
  

  export const designSkills = [
    "Figma", 
    "AdobePhotoshop/Illustrator/After Effects",
    "Clip Studio", 
    "Paint Tool Sai",
    "Gimp"
  ] as const;

