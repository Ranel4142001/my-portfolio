import ProjectsHeader from './ProjectsHeader';
import FeaturedProjects from './FeaturedProjects';
import OtherProjects from './OtherProjects';

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
