import ProjectsHeader from './components/ProjectsHeader';
import FeaturedProjects from './components/FeaturedProjects';
import OtherProjects from './components/OtherProjects';

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <ProjectsHeader />
        <FeaturedProjects />
        <OtherProjects />
      </div>
    </section>
  );
};

export default Projects;
