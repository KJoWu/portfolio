export type SkillSet = {
  category: string;
  items: string[];
};

export const skills: SkillSet[] = [
  {
    category: "Development",
    items: ["TypeScript", "React JS", "Next JS", "Ruby on Rails", "Redux", "Python", "React Native"],
  },
  {
    category: "Design",
    items: ["Figma", "Adobe CC", "UI/UX", "Design Systems", "Tailwind", "BEM"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Jest", "REST APIs"],
  },
];
