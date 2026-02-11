// features/skills/components/SkillsGrid.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { scrollFade } from '../animations/skills.animations';
import { Skill } from '../types/skills.types';

interface Props {
  filteredSkills: Skill[];
}

export const SkillsGrid = ({ filteredSkills }: Props) => (
  <div className="max-w-4xl mx-auto grid gap-6">
    <AnimatePresence mode="wait">
      <motion.div
        key={filteredSkills.map(s => s.name).join(',')}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="grid gap-6"
      >
        {filteredSkills.map((skill, index) => (
          <div
            key={skill.name}
            className="group p-6 rounded-xl bg-card border border-border transition-all duration-500"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold text-foreground">{skill.name}</span>
              <span className="text-sm font-mono text-primary">{skill.level}%</span>
            </div>
            <div className="skill-bar h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="skill-bar-fill h-full bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.1 + index * 0.1 }}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  </div>
);
