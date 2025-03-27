export type SkillSet = {
  category: string;
  items: string[];
};

export const skills: SkillSet[] = [
  {
    category: "Development",
    items: ["TypeScript", "React JS", "Next JS", "Ruby on Rails", "Redux", "Python", "React Native", "Tailwind", "BEM"],
  },
  {
    category: "Marketing & Design",
    items: ["Figma", "Photoshop", "Canva", "Capcut", "Adobe Premiere", ],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Jest", "REST APIs", "Hootesuite", "Assembly", "Buffer"],
  },
];
