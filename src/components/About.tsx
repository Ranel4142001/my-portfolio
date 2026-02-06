import { useRef, useEffect, useState } from 'react';
import { Server, Database, Shield, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Server,
    title: 'API Development',
    description: 'RESTful & GraphQL APIs built for performance and scalability',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Efficient schema design and query optimization',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Implementing best practices for authentication & authorization',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing systems for speed and reliability',
  },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section id="about" ref={sectionRef} className="section-padding relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary text-sm font-medium">About Me</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Crafting the{' '}
              <span className="text-gradient">backbone</span> of
              <br />
              digital products
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a backend developer passionate about building robust server-side architectures 
                that power seamless user experiences. With expertise in modern backend technologies, 
                I transform complex requirements into elegant, maintainable code.
              </p>
              <p>
                My approach combines clean code principles with pragmatic problem-solving. 
                I believe in writing code that not only works but is also easy to understand, 
                test, and extend.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or deepening my understanding of system design patterns.
              </p>
            </div>

            {/* Code snippet decoration */}
            <div className="mt-8 p-4 code-block text-sm">
              <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <code className="text-muted-foreground">
                <span className="text-primary">const</span>{' '}
                <span className="text-foreground">developer</span> = {'{'}
                <br />
                <span className="ml-4 text-muted-foreground">name:</span>{' '}
                <span className="text-emerald-400">'Ranel Dahil'</span>,
                <br />
                <span className="ml-4 text-muted-foreground">role:</span>{' '}
                <span className="text-emerald-400">'Backend Developer'</span>,
                <br />
                <span className="ml-4 text-muted-foreground">passion:</span>{' '}
                <span className="text-emerald-400">'Building scalable systems'</span>
                <br />
                {'}'};
              </code>
            </div>
          </div>

          {/* Right Column - Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-500 card-glow ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
