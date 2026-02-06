import { useRef, useEffect, useState } from 'react';

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
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Languages');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" ref={sectionRef} className="section-padding relative bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-primary text-sm font-medium">Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building robust backend systems
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '100ms' }}>
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
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto grid gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group p-6 rounded-xl bg-card border border-border transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-foreground">{skill.name}</span>
                <span className="text-sm font-mono text-primary">{skill.level}%</span>
              </div>
              <div className="skill-bar h-2">
                <div
                  className="skill-bar-fill"
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${(index + 3) * 100}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className={`mt-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
