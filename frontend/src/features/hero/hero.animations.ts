export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.6 },
};

export const fadeUpWithDelay = (delay: number) => ({
  initial: fadeUp.initial,
  whileInView: fadeUp.whileInView,
  viewport: fadeUp.viewport,
  transition: { ...fadeUp.transition, delay },
});
