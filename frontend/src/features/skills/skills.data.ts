// features/skills/skills.data.ts

import { Skill } from './skills.types';

export const skills: Skill[] = [
  // Languages
  { name: 'Python', level: 90, category: 'Languages' },
  { name: 'JavaScript/TypeScript', level: 85, category: 'Languages' },
  { name: 'Java', level: 80, category: 'Languages' },
  { name: 'SQL', level: 88, category: 'Languages' },

  // Frameworks
  { name: 'Node.js / Express', level: 88, category: 'Frameworks' },
  { name: 'Django / Flask', level: 85, category: 'Frameworks' },
  { name: 'Spring Boot', level: 75, category: 'Frameworks' },
  { name: 'FastAPI', level: 82, category: 'Frameworks' },

  // Databases
  { name: 'PostgreSQL', level: 90, category: 'Databases' },
  { name: 'MongoDB', level: 85, category: 'Databases' },
  { name: 'Redis', level: 80, category: 'Databases' },
  { name: 'MySQL', level: 85, category: 'Databases' },

  // DevOps
  { name: 'Docker', level: 85, category: 'DevOps' },
  { name: 'Git / GitHub', level: 92, category: 'DevOps' },
  { name: 'AWS / Cloud', level: 75, category: 'DevOps' },
  { name: 'CI/CD', level: 78, category: 'DevOps' },
];

export const categories = ['Languages', 'Frameworks', 'Databases', 'DevOps'];

export const extraSkills = [
  'REST APIs',
  'GraphQL',
  'Microservices',
  'OAuth 2.0',
  'WebSockets',
  'RabbitMQ',
  'Kubernetes',
  'Linux',
  'Nginx',
  'Testing',
];
