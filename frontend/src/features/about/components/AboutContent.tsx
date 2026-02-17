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
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 w-fit">
        <span className="text-primary text-sm font-medium">About Me</span>
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
        Developing <span className="text-gradient">secure</span> and reliable
        <br />
         backend systems
      </h2>

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
        
        {/* ... rest of your code ... */}
      </div>
      
      {/* ... code block ... */}
    </motion.div>
  )
}

export default AboutContent;