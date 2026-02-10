import Navigation from '@/layouts/Navigation';
import Footer from '@/layouts/Footer';
import Hero from '@/features/hero/Hero';
import About from '@/features/about/About';
import Skills from '@/features/skills/Skills';
import Projects from '@/features/projects/Projects';
import Contact from '@/features/contact/Contact';

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