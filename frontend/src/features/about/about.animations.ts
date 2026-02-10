import { viewportSettings } from "@/lib/animations";

export const aboutTextMotion = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewportSettings,
  transition: { duration: 0.7 },
};
