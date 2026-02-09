import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";

const Hero = () => {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <HeroBackground />
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <HeroContent />
          <HeroActions onView={scrollToProjects} onContact={scrollToContact} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
