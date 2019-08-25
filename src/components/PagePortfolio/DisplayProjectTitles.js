import React from 'react';
import './DisplayProjectTitles.css';

function DisplayProjectTitles({projectsList, activeProject, updateProjectsArray}) {
  function clickOnProject(e, currentProject) {
    e.preventDefault();
    updateProjectsArray(currentProject);
  }

  return (
    <>
      {projectsList.map((project, index) => {
        const isActive = project.name === activeProject.name;
        return (
          <React.Fragment key={project.id}>
            <section className="titles-list">
              <h1 className={isActive ? 'active' : ''} onClick={e => {clickOnProject(e, project);}}>{project.name}</h1>
              <div className="project-index">0{index + 1}</div>
            </section>
            {isActive && <div className={`line-titles  ${project.class}`}/>}
          </React.Fragment>
        );
      })}
    </>
  );
}

export default DisplayProjectTitles;
