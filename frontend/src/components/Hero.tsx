import { motion } from 'framer-motion'; // Import motion
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Ranel_Dahil_CV.pdf';
    link.download = 'Ranel_Dahil_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Reusable animation settings for "always animate on scroll"
  const scrollFadeProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 }, // amount: 0.2 means trigger when 20% visible
    transition: { duration: 0.6 }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Tag */}
          <motion.div 
            {...scrollFadeProps}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-sm font-mono">Backend Developer</span>
          </motion.div>

          {/* Name */}
          <motion.h1 
            {...scrollFadeProps}
            transition={{ ...scrollFadeProps.transition, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="text-gradient">Ranel Laurente Dahil</span>
          </motion.h1>

          {/* Terminal-style subtitle */}
          <motion.div 
            {...scrollFadeProps}
            transition={{ ...scrollFadeProps.transition, delay: 0.2 }}
            className="font-mono text-muted-foreground mb-8"
          >
            <span className="text-primary">$</span> Building robust, scalable backend systems
            <span className="cursor-blink" />
          </motion.div>

          {/* Description */}
          <motion.p 
            {...scrollFadeProps}
            transition={{ ...scrollFadeProps.transition, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            I architect and develop efficient server-side solutions, APIs, and database systems 
            that power modern applications. Passionate about clean code and system design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            {...scrollFadeProps}
            transition={{ ...scrollFadeProps.transition, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Button 
              onClick={scrollToProjects}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={handleDownload}
              className="border-border hover:bg-secondary px-8 py-6 text-base font-semibold"
            >
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            {...scrollFadeProps}
            transition={{ ...scrollFadeProps.transition, delay: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            <a 
              href="https://github.com/Ranel4142001" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ranel-dahil-594b44293/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <button 
              onClick={scrollToContact}
              className="p-3 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator - Removed inset-x-0 and used left-1/2 for perfect centering */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;