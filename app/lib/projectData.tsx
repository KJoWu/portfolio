import app1 from "../../public/app1.jpg";
import app2 from "../../public/app2.jpg";
import app3 from "../../public/app3.jpg";


export const projectsData = [
    {
      title: "Advertising Agency",
      description: "Develope a user experience for a large scale application",
      imageUrl:app1,
      tags: ["Desktop", "MVP Design", "Frontend Developement", "Backend Development"]
    },
    {
      title: "Colledge Data Sharing",
      description: "How can we improve Canada data for users across Canada",
      imageUrl:app2,
      tags: ["Mobile", "MVP Design", "Frontend Developement", "Backend Development"]
    },
    {
      title: "Physical Contrusction",
      description: "How can we seamlessly coordinate a lab",
      imageUrl:app3,
      tags: ["Physical Skills"]
    },
  ] as const;