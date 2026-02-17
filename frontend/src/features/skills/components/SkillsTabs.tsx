// features/skills/components/SkillsTabs.tsx
import { motion } from 'framer-motion';
import { categories } from '../data/skills.data';
import { scrollFade } from '../animations/skills.animations';

interface Props {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export const SkillsTabs = ({ activeCategory, setActiveCategory }: Props) => (
  <motion.div {...scrollFade} className="flex flex-wrap justify-center gap-2 mb-12">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => setActiveCategory(category)}
        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
          activeCategory === category
            ? 'bg-primary text-primary-foreground'
            : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
        }`}
      >
        {category}
      </button>
    ))}
  </motion.div>
);
export default SkillsTabs;