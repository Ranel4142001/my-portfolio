// src/lib/animations.ts
import { Variants } from 'framer-motion';

/**
 * Global viewport settings to ensure consistency across the site.
 * amount: 0.1 means animate when 10% of the item is visible.
 * margin: "-50px" provides a buffer to prevent flickering on screen edges.
 */
export const viewportSettings = {
  once: false,
  amount: 0.1,
  margin: "-50px"
};

/**
 * Standard staggered slide-up variant for card groups.
 */
export const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 15 
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      // Staggers: 0.2s on desktop, 0.1s flat delay on mobile for smoothness
      delay: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.1 : i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

/**
 * Simple fade-in variant for text blocks or section headers.
 */
export const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  }
};