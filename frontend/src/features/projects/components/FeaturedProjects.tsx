import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { cardVariants, viewportSettings } from '@/lib/animations';
import { featuredProjects } from '../projects.selectors';

const FeaturedProjects = () => {
  return (
    <div className="space-y-8 mb-16">
      {featuredProjects.map((project, index) => (
        <motion.div
          key={project.title}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={cardVariants}
          className="group relative p-8 rounded-2xl bg-card border border-border transform-gpu will-change-transform card-glow"
        >
          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <Folder className="w-7 h-7 text-primary" />
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3">
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
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-secondary text-xs font-mono text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturedProjects;
