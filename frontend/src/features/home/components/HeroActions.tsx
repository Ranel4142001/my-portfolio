import { motion } from "framer-motion";
import { Button } from "@/components/button";
import { Github, Linkedin, Mail } from "lucide-react";
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
    <>
      <motion.div {...fadeUpWithDelay(0.4)} className="flex flex-wrap items-center justify-center gap-4 mb-12">
        <Button onClick={onView}>View My Work</Button>
        <Button onClick={handleDownload} variant="outline">
          Download CV
        </Button>
      </motion.div>

      <motion.div {...fadeUpWithDelay(0.5)} className="flex items-center justify-center gap-4">
        {SOCIAL_LINKS.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label === "GitHub" ? <Github /> : <Linkedin />}
          </a>
        ))}
        <button onClick={onContact}>
          <Mail />
        </button>
      </motion.div>
    </>
  );
};

export default HeroActions;
