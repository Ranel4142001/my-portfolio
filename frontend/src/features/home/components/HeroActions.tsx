import { motion } from "framer-motion";
import { Button } from "@/components/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"; 
import { CV_LINK, SOCIAL_LINKS } from "../data/hero.data";
import { fadeUpWithDelay } from "../animations/hero.animations";

interface HeroActionsProps {
  onView: () => void;
  onContact: () => void;
}

const HeroActions: React.FC<HeroActionsProps> = ({ onView, onContact }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV_LINK;
    link.download = "Ranel_Dahil_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center">
      {/* 1. CTA Buttons Section */}
      <motion.div 
        {...fadeUpWithDelay(0.4)} 
        className="flex flex-wrap items-center justify-center gap-4 mb-6" 
      >
        <Button onClick={onView}>View My Work</Button>
        <Button onClick={handleDownload} variant="outline">
          Download CV
        </Button>
      </motion.div>

      {/* 2. Combined Scroll & Social Stack */}
      <motion.div 
        {...fadeUpWithDelay(0.6)} 
        className="flex flex-col items-center gap-3" // Tight gap to make icons "meet" the arrow
      >
        {/* Scroll Indicator Group */}
        <div className="flex flex-col items-center gap-1"> 
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.4em] font-black text-muted-foreground/80">
            Scroll
          </span>
          {/* Arrow is now primary color and closer to icons */}
          <ArrowDown className="w-4 h-4 text-primary/80 animate-bounce" />
        </div>

        {/* Social Icons Row */}
        <div className="flex items-center justify-center gap-6 mt-1">
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
            >
              {link.label === "GitHub" ? <Github size={22} /> : <Linkedin size={22} />}
            </a>
          ))}
          <button 
            onClick={onContact}
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
          >
            <Mail size={22} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroActions;