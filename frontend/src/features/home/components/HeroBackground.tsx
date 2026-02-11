import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroBackground = () => (
  <>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
    <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
    <div
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
    />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ delay: 0.6 }}
      className="absolute bottom-11 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
    >
      <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
      <ArrowDown className="w-4 h-4 animate-bounce" />
    </motion.div>
  </>
);

export default HeroBackground;
