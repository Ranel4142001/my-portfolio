import { Project } from "../types/projects.types";

export const projectsData: Project[] = [
  {
    title: "Backend API System",
    description: "A fully-featured REST API built with Node.js and PostgreSQL.",
    technologies: ["Node.js", "PostgreSQL", "Express"],
    github: "https://github.com/example/backend-api",
    live: "",
    featured: true,
  },
  {
    title: "Inventory Management",
    description: "A warehouse inventory system with real-time tracking.",
    technologies: ["PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/example/inventory-system",
    live: "",
    featured: true,
  },
  {
    title: "Blog Platform",
    description: "A simple blog platform built with Next.js.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    github: "https://github.com/example/blog-platform",
    live: "https://blog.example.com",
    featured: false,
  },
  // Add more projects as needed
];
