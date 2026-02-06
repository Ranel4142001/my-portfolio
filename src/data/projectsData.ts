// Define the structure for a project
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  direction: 'left' | 'right' | 'bottom';
}

export const projectsData: Project[] = [
  {
    title: "E-Commerce App",
    description: "A full-stack shop with secure checkout.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/...",
    direction: "left"
  },
  // Add more projects here to match image_57c27e.jpg
];// Define the structure for a project
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  direction: 'left' | 'right' | 'bottom';
}

