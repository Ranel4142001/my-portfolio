// features/skills/components/SkillsExtraTags.tsx
import { motion } from 'framer-motion';
import { extraSkills } from '../data/skills.data';
import { scrollFade } from '../animations/skills.animations';

export const SkillsExtraTags = () => (
  <motion.div {...scrollFade} className="mt-16 text-center">
    <h3 className="text-lg font-semibold mb-6 text-foreground">Also familiar with</h3>
    <div className="flex flex-wrap justify-center gap-3">
      {extraSkills.map((tag) => (
        <span
          key={tag}
          className="px-4 py-2 rounded-full bg-secondary/50 text-sm text-muted-foreground border border-border hover:border-primary/30 hover:text-foreground transition-all"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);
export default SkillsExtraTags;