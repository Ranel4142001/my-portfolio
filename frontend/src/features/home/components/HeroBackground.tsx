import { motion } from "framer-motion";

const HeroBackground = () => (
  <>
    {/* Main background gradient: Fades from top to bottom */}
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20 pointer-events-none" />

    {/* Animated glow effects: Large blurred circles for depth */}
    <div className="absolute top-1/4 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
    <div className="absolute bottom-1/4 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

    {/* The Grid Pattern: Creates the "architectural" look using linear gradients */}
    <div
      className="absolute inset-0 opacity-[0.02] pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(hsl(var(--primary)) 1px, transparent 1px), 
          linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />

    {/* Note: The Scroll Indicator (Arrow & Text) was removed from here 
      and moved to HeroActions.tsx to fix the alignment issue with your icons.
    */}
  </>
);

export default HeroBackground;