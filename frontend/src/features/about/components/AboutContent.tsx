import { motion } from 'framer-motion'
import { aboutFadeUp, viewportSettings } from '../animations/about.animations'

const AboutContent = () => {
  return (
    <motion.div 
      variants={aboutFadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      custom={0} 
      className="flex flex-col"
    >
      {/* Section Header */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 w-fit">
        <span className="text-primary text-sm font-medium">About Me</span>
      </div>

      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
        Developing <span className="text-gradient">secure</span> and reliable
        <br />
         backend systems
      </h2>

      {/* About Text */}
      <div className="space-y-4 text-muted-foreground">
        <p>
          I'm a Backend Developer building secure and reliable systems with PHP (Laravel),
          Node.js (NestJS), TypeScript, MySQL, and Prisma ORM. Currently,
          I’m a Web Development Intern at Rockson and an IT student at
          Cebu Technological University – Danao Campus.
        </p>

        <p>
          I’ve worked on projects like a Water Refilling Station, Beach Resort, and POS System,
          focusing on solving logic challenges and writing clean, maintainable code.
        </p>

        <p>
          I’m eager to learn new technologies and take on challenges that help me grow
          as a backend developer while delivering real value through the systems I build.
        </p>
      </div>

      {/* Code Snippet Decoration */}
      <div className="mt-8 p-4 code-block text-sm bg-muted/5 rounded-lg">
        <div className="flex items-center gap-2 mb-3 text-muted-foreground">
          <div className="w-3 h-3 rounded-full bg-destructive/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <code className="text-muted-foreground block whitespace-pre">
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
  )
}

export default AboutContent
