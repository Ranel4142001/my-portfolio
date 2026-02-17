// features/skills/skills.data.ts

export interface Skill {
  name: string;
  level: number; // Proficiency level (0-100)
  category: string; // e.g., "Languages", "Frameworks", "Databases", "DevOps"
}

export const skills: Skill[] = [
  // Languages
  { name: "PHP", level: 85, category: "Languages" },
  { name: "JavaScript/TypeScript", level: 88, category: "Languages" },
  { name: "Python", level: 70, category: "Languages" },
  { name: "SQL", level: 85, category: "Languages" },

  // Frameworks
  { name: 'Laravel', level: 85, category: 'Frameworks' },
  { name: 'Node.js / NestJS', level: 88, category: 'Frameworks' },
  { name: 'Flask', level: 70, category: 'Frameworks' }, 

  // Databases
  { name: 'MySQL', level: 85, category: 'Databases' },
  { name: 'PostgreSQL', level: 75, category: 'Databases' },
  { name: 'Prisma ORM', level: 80, category: 'Databases' },

  // DevOps
  { name: "Docker", level: 70, category: "DevOps" },
  { name: "Git / GitHub", level: 92, category: "DevOps" },
  { name: 'Testing / Debugging', level: 80, category: 'Tools' },
];

export const categories = ["Languages", "Frameworks", "Databases", "DevOps"];

export const extraSkills = [
  "REST APIs",
  "Authentication",
  "Linux basics",
  "Testing",
  "Prisma ORM",
];
