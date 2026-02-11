// features/skills/selectors/skills.selectors.ts

import { skills } from '../data/skills.data';
import { Skill } from '../types/skills.types';

export const getSkillsByCategory = (category: string): Skill[] =>
  skills.filter((skill) => skill.category === category);
