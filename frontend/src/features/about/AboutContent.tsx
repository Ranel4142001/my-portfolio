import { motion } from 'framer-motion';
import { aboutTextMotion } from './about.animations';

const AboutContent = () => {
  return (
    <motion.div {...aboutTextMotion} className="flex flex-col">
      {/* Section Label */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 w-fit">
        <span className="text-primary text-sm font-medium">About Me</span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
        Crafting the <span className="text-gradient">backbone</span> of
        <br />
        digital products
      </h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          I'm a backend developer passionate about building robust server-side
          architectures that power seamless user experiences. With expertise in
          modern backend technologies, I transform complex requirements into
          elegant, maintainable code.
        </p>
        <p>
          My approach combines clean code principles with pragmatic
          problem-solving. I believe in writing code that not only works but is
          also easy to understand, test, and extend.
        </p>
        <p>
          When I'm not coding, you'll find me exploring new technologies,
          contributing to open-source projects, or deepening my understanding of
          system design patterns.
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
          <span className="text-emerald-400">'Ranel Laurente Dahil'</span>,
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
    </motion.div>
  );
};

export default AboutContent;
