import { motion } from "framer-motion";
import { viewportSettings } from "../animations/projects.animations";

export const ProjectsHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={viewportSettings}
    transition={{ duration: 0.7 }}
    className="text-center mb-16"
  >
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
      <span className="text-primary text-sm font-medium">Projects</span>
    </div>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
      Featured <span className="text-gradient">Work</span>
    </h2>
    <p className="text-muted-foreground max-w-2xl mx-auto">
      A selection of backend projects I've built, showcasing my expertise in system design and development.
    </p>
  </motion.div>
);
