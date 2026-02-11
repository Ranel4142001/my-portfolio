import Navigation from '@/layouts/Navigation';
import Footer from '@/layouts/Footer';
import Hero from '@/features/home/components/HeroSection';
import About from '@/features/about/components/AboutSection';
import Skills from '@/features/skills/components/SkillsSection';
import Projects from '@/features/projects/components/ProjectsSection';
import Contact from '@/features/contact/components/ContactSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;