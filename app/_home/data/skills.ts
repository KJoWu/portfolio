export type SkillSet = {
  category: string;
  items: string[];
};

export const skills: SkillSet[] = [
  {
    category: "Development",
    items: ["Smart Contracts", "Leo", "TypeScript", "React JS", "Next JS", "Ruby on Rails", "Redux", "Python", "React Native", "Tailwind"],
  },
  {
    category: "Marketing & Design",
    items: ["Figma", "Photoshop", "Canva", "Capcut", "Event Planning", "Social Media Engagement", "Project Management" ],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Jest", "REST APIs", "Hootesuite", "Assembly", "Buffer"],
  },
];
