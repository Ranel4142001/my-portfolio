import { motion } from 'framer-motion';
import { aboutHighlights } from '@/data/aboutData';
import { cardVariants, viewportSettings } from '@/lib/animations';

const AboutHighlights = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {aboutHighlights.map((item, index) => (
        <motion.div
          key={item.title}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="group p-6 rounded-xl bg-card border border-border transform-gpu will-change-transform card-glow"
        >
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <item.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default AboutHighlights;
