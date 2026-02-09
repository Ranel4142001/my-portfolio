import { useState } from 'react'; // Removed useRef and useEffect as they are no longer needed
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence for smooth tab switching

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Languages
  { name: 'Python', level: 90, category: 'Languages' },
  { name: 'JavaScript/TypeScript', level: 85, category: 'Languages' },
  { name: 'Java', level: 80, category: 'Languages' },
  { name: 'SQL', level: 88, category: 'Languages' },
  
  // Frameworks
  { name: 'Node.js / Express', level: 88, category: 'Frameworks' },
  { name: 'Django / Flask', level: 85, category: 'Frameworks' },
  { name: 'Spring Boot', level: 75, category: 'Frameworks' },
  { name: 'FastAPI', level: 82, category: 'Frameworks' },
  
  // Databases
  { name: 'PostgreSQL', level: 90, category: 'Databases' },
  { name: 'MongoDB', level: 85, category: 'Databases' },
  { name: 'Redis', level: 80, category: 'Databases' },
  { name: 'MySQL', level: 85, category: 'Databases' },
  
  // DevOps & Tools
  { name: 'Docker', level: 85, category: 'DevOps' },
  { name: 'Git / GitHub', level: 92, category: 'DevOps' },
  { name: 'AWS / Cloud', level: 75, category: 'DevOps' },
  { name: 'CI/CD', level: 78, category: 'DevOps' },
];

const categories = ['Languages', 'Frameworks', 'Databases', 'DevOps'];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Languages');

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section-padding relative bg-secondary/30">
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
            <span className="text-primary text-sm font-medium">Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building robust backend systems
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto grid gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory} // Key changes whenever category changes, triggering animation
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6"
            >
              {filteredSkills.map((skill, index) => (
                <div key={skill.name} className="group p-6 rounded-xl bg-card border border-border transition-all duration-500">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-foreground">{skill.name}</span>
                    <span className="text-sm font-mono text-primary">{skill.level}%</span>
                  </div>
                  <div className="skill-bar h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="skill-bar-fill h-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: false }}
                      transition={{ duration: 1, delay: 0.1 + index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Additional Skills Tags */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-lg font-semibold mb-6 text-foreground">Also familiar with</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['REST APIs', 'GraphQL', 'Microservices', 'OAuth 2.0', 'WebSockets', 'RabbitMQ', 'Kubernetes', 'Linux', 'Nginx', 'Testing'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-secondary/50 text-sm text-muted-foreground border border-border hover:border-primary/30 hover:text-foreground transition-all"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;