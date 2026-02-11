import { motion } from "framer-motion";
import { HERO_TAG, HERO_NAME, HERO_SUBTITLE, HERO_DESCRIPTION } from "../data/hero.data";
import { fadeUp, fadeUpWithDelay } from "../animations/hero.animations";

const HeroContent = () => (
  <>
    <motion.div {...fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
      <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
      <span className="text-primary text-sm font-mono">{HERO_TAG}</span>
    </motion.div>

    <motion.h1 {...fadeUpWithDelay(0.1)} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
      Hi, I'm <span className="text-gradient">{HERO_NAME}</span>
    </motion.h1>

    <motion.div {...fadeUpWithDelay(0.2)} className="font-mono text-muted-foreground mb-8">
      <span className="text-primary">$</span> {HERO_SUBTITLE}
      <span className="cursor-blink" />
    </motion.div>

    <motion.p {...fadeUpWithDelay(0.3)} className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
      {HERO_DESCRIPTION}
    </motion.p>
  </>
);

export default HeroContent;
