import AboutContent from './components/AboutContent';
import AboutHighlights from './components/AboutHighlights';

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AboutContent />
          <AboutHighlights />
        </div>
      </div>
    </section>
  );
};

export default About;
