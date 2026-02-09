import { motion } from "framer-motion";
import { Button } from "../../shared/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { CV_LINK, SOCIAL_LINKS } from "./hero.data";
import { fadeUpWithDelay } from "./hero.animations";

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
    <>
      <motion.div {...fadeUpWithDelay(0.4)} className="flex flex-wrap items-center justify-center gap-4 mb-12">
        <Button onClick={onView} className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold">
          View My Work
        </Button>
        <Button onClick={handleDownload} variant="outline" className="border-border hover:bg-secondary px-8 py-6 text-base font-semibold">
          Download CV
        </Button>
      </motion.div>

      <motion.div {...fadeUpWithDelay(0.5)} className="flex items-center justify-center gap-4">
        {SOCIAL_LINKS.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
            aria-label={link.label}
          >
            {link.label === "GitHub" ? <Github className="w-5 h-5" /> : <Linkedin className="w-5 h-5" />}
          </a>
        ))}
        <button onClick={onContact} className="p-3 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all" aria-label="Email">
          <Mail className="w-5 h-5" />
        </button>
      </motion.div>
    </>
  );
};

export default HeroActions;
