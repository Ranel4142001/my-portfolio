import { projectsData } from '@/data/projectsData';

export const featuredProjects = projectsData.filter(p => p.featured);
export const otherProjects = projectsData.filter(p => !p.featured);
