import React, {useState} from 'react';

function DisplayProjetcsTitle({list, updateProjectsArray}) {
  const [activeProject, setActiveProject] = useState(list[0]);

  function clickOnProject(e, currentProject) {
    e.preventDefault();
    setActiveProject(currentProject);
    updateProjectsArray(currentProject, activeProject);
  }

  return (
    <>
      {list.map((project, index) => {
        const isActive = project.name === activeProject.name;
        return (
          <React.Fragment key={project.id}>
            <section id={project.class}>
              <h1 className={isActive ? 'active' : ''} onClick={e => {clickOnProject(e, project);}}>{project.name}</h1>
              <div className="project-index">0{index + 1}</div>
            </section>
            {isActive && <div className={`line  ${project.class}`}/>}
          </React.Fragment>
        );
      })}
    </>
  );
}

export default DisplayProjetcsTitle;
