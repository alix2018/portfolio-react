import React from "react";
import "./DisplayProjectNames.css";

function DisplayProjectNames({
  projectsList,
  activeProject,
  updateActiveProject,
}) {
  function clickOnProject(event, selectedProject) {
    event.preventDefault();
    updateActiveProject(selectedProject);
  }

  return (
    <div className="project-names">
      {projectsList.map((project, index) => {
        const isActive = project.name === activeProject.name;
        return (
          <React.Fragment key={project.id}>
            <div className="project-name">
              <a
                className={`heading-styles ${isActive ? "active" : ""}`}
                onClick={(event) => {
                  clickOnProject(event, project);
                }}
              >
                {project.name}
              </a>
              <p className="index">0{index + 1}</p>
              {isActive && <div className="line-projects" />}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default DisplayProjectNames;
