export const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.6 },
  }),
};

export const viewportSettings = { once: false, amount: 0.2 };
