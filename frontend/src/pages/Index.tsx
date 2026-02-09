import Navigation from '@/shared/components/layout/Navigation';
import Hero from '@/features/hero/Hero';
import About from '@/features/about/About';
import Skills from '@/features/skills/Skills';
import Projects from '@/features/projects/Projects';
import Contact from '@/features/contact/Contact';
import Footer from '@/shared/components/layout/Footer';

const Index = () => {
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

export default Index;
