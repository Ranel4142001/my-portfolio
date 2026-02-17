import AboutContent from './AboutContent'
import AboutHighlights from './AboutHighlights'

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AboutContent />
          <AboutHighlights />
        </div>
      </div>
    </section>
  )
}

export default AboutSection;
