import { Variants } from 'framer-motion';

export const viewportSettings = {
  once: false,
  amount: 0.2,
};

// Standard object-based animation
export const aboutTextMotion: Variants = {
  initial: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

// 🛠️ Fixed: Explicitly typed as Variants to allow the dynamic 'index'
export const aboutFadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.6,
    },
  }),
};