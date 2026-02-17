// features/skills/components/SkillsHeader.tsx
import { motion } from 'framer-motion';
import { scrollFade } from '../animations/skills.animations';

export const SkillsHeader = () => (
  <motion.div {...scrollFade} className="text-center mb-16">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
      <span className="text-primary text-sm font-medium">Skills</span>
    </div>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
      Technical <span className="text-gradient">Expertise</span>
    </h2>
    <p className="text-muted-foreground max-w-2xl mx-auto">
      My toolkit includes PHP (Laravel), Node.js (NestJS), TypeScript, MySQL, Prisma ORM, and other backend technologies for building secure, reliable, and maintainable systems.
    </p>
  </motion.div>
);
export default SkillsHeader;