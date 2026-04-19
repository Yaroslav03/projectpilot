
import PropTypes from 'prop-types';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
  projects: Project[];
}

 function ProjectList ({ projects }: ProjectListProps) {
   const handleEdit = (project: Project) => {
     console.log(project);
   };
  
    const items = projects.map(project => (
      <div key={project.id} className="cols-sm">
        <ProjectCard project={project} onEdit={handleEdit}></ProjectCard>
        <ProjectForm/>
      </div>
    ));
    return <div className="row">{items}</div>;
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
};

export default ProjectList;