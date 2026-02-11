export const viewportSettings = {
  once: true,
  amount: 0.2,
}

export const aboutTextMotion = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewportSettings,
  transition: { duration: 0.7 },
}

export const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.6,
    },
  }),
}
