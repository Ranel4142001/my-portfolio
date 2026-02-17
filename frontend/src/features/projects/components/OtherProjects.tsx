import { motion } from "framer-motion";
import { Folder, Github } from "lucide-react";
import { cardVariants, viewportSettings } from "../animations/projects.animations";
import { otherProjects } from "../selectors/projects.selectors";

export const OtherProjects = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.1 }}
    transition={{ duration: 0.7 }}
  >
    <h3 className="text-xl font-semibold mb-8 text-center text-foreground">
      Other Notable Projects
    </h3>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {otherProjects.map((project, index) => (
        <motion.div
          key={project.title}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={cardVariants}
          className="group p-6 rounded-xl bg-card border border-border transform-gpu will-change-transform card-glow"
        >
          <div className="flex items-center justify-between mb-4">
            <Folder className="w-10 h-10 text-primary" />
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>

          <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h4>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="text-xs font-mono text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);
export default OtherProjects;