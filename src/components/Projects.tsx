import { motion, Variants } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: 'E-Commerce API Platform',
    description: 'A scalable RESTful API powering an e-commerce platform with user authentication, product management, order processing, and payment integration. Built with microservices architecture for high availability.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Real-time Chat System',
    description: 'WebSocket-based chat application supporting private messaging, group chats, and file sharing. Features include message encryption, read receipts, and offline message queuing.',
    technologies: ['Python', 'FastAPI', 'WebSocket', 'MongoDB', 'RabbitMQ'],
    github: 'https://github.com',
    featured: true,
  },
  {
    title: 'Authentication Service',
    description: 'Centralized authentication microservice implementing OAuth 2.0, JWT tokens, and multi-factor authentication. Supports social login and role-based access control.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'OAuth2'],
    github: 'https://github.com',
    featured: true,
  },
  {
    title: 'Task Queue Manager',
    description: 'Distributed task queue system for handling background jobs with priority scheduling, retry mechanisms, and monitoring dashboard.',
    technologies: ['Python', 'Celery', 'Redis', 'Docker'],
    github: 'https://github.com',
    featured: false,
  },
  {
    title: 'Log Analytics Pipeline',
    description: 'Real-time log aggregation and analysis system processing millions of events per day with anomaly detection and alerting.',
    technologies: ['Node.js', 'Elasticsearch', 'Kafka', 'Kibana'],
    github: 'https://github.com',
    featured: false,
  },
  {
    title: 'API Gateway',
    description: 'Custom API gateway handling rate limiting, request validation, load balancing, and API versioning for microservices.',
    technologies: ['Go', 'Redis', 'Nginx', 'Docker'],
    github: 'https://github.com',
    featured: false,
  },
];

const Projects = () => {

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const cardVariants: Variants= {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1, 
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
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
            A selection of backend projects I've built, showcasing my expertise in system design and development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={cardVariants}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 card-glow"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Project Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Folder className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
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
                          aria-label="View on GitHub"
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
                          aria-label="View live site"
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

        {/* Other Projects Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold mb-8 text-center text-foreground">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                variants={cardVariants}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
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
      </div>
    </section>
  );
};

export default Projects;