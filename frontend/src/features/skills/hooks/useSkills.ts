// features/skills/hooks/useSkills.ts
import { useState } from 'react';
import { skills } from '../data/skills.data';

export const useSkills = () => {
  const [activeCategory, setActiveCategory] = useState('Languages');

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  return { activeCategory, setActiveCategory, filteredSkills };
};
