import { projectsData } from "../data/project.data";

export const featuredProjects = projectsData.filter(p => p.featured);
export const otherProjects = projectsData.filter(p => !p.featured);
