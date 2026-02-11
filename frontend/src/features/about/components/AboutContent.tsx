import { motion } from 'framer-motion'
import { aboutTextMotion } from '../animations/about.animations'

const AboutContent = () => {
  return (
    <motion.div {...aboutTextMotion} className="flex flex-col">
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
          architectures that power seamless user experiences.
        </p>
        <p>
          My approach combines clean code principles with pragmatic
          problem-solving.
        </p>
        <p>
          When I'm not coding, you'll find me exploring new technologies.
        </p>
      </div>

      <div className="mt-8 p-4 code-block text-sm">
        <div className="flex items-center gap-2 mb-3 text-muted-foreground">
          <div className="w-3 h-3 rounded-full bg-destructive/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <code className="text-muted-foreground">
          const developer = {'{'}
          <br />
          &nbsp;&nbsp;name: 'Ranel Laurente Dahil',
          <br />
          &nbsp;&nbsp;role: 'Backend Developer',
          <br />
          &nbsp;&nbsp;passion: 'Building scalable systems'
          <br />
          {'}'};
        </code>
      </div>
    </motion.div>
  )
}

export default AboutContent
