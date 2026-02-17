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
          // 🛠️ Ensure flex-col and h-full are here to allow vertical stretching
          className="group p-6 rounded-2xl bg-card border border-border transform-gpu will-change-transform card-glow flex flex-col h-full"
        >
          {/* 🛠️ Top Content Wrapper: Using flex-1 here pushes the tech tags to the bottom */}
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4 mb-4">
              <Folder className="w-10 h-10 text-primary" />
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>

            <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h4>

            <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* 🛠️ Bottom Content: This will now always sit at the bottom edge */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 pt-4 border-t border-border/50">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="text-xs font-mono text-muted-foreground/80">
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