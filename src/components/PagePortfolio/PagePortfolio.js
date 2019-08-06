import React, {useState} from 'react';
import './PagePortfolio.css';

function PagePortfolio() {
  const projectsList = [
    {
      id: 1,
      class: 'loyalty-application',
      name: 'Loyalty Application'
    },
    {
      id: 2,
      class: 'retailer-portal',
      name: 'Retailer Portal'
    },
    {
      id: 3,
      class: 'games',
      name: '2D Games'
    },
    {
      id: 4,
      class: 'facebook-chatbot',
      name: 'Facebook Chatbot'
    }
  ];
  // Initialize list of project
  const projects = [];
  projectsList.forEach(element => {
    projects.push(element.class);
  });

  const [activeProject, setActiveProject] = useState(projectsList[0]);
  const [projectsArray] = useState(projects);

  function clickOnProject(e, currentProject) {
    e.preventDefault();
    setActiveProject(currentProject);
    const differenceBetween = currentProject.id - activeProject.id;
    if (differenceBetween > 0) {
      for (let i = 0; i < differenceBetween; i++) {
        projectsArray.push(projectsArray.shift());
      }
    } else if (differenceBetween < 0) {
      for (let i = 0; i < Math.abs(differenceBetween); i++) {
        projectsArray.unshift(projectsArray.pop());
      }
    }
  }

  return (
    <section id="portfolio" className="portfolio">
      <div className="left">
        <div className="titles">
          {projectsList.map((project, index) => {
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
        </div>
      </div>
      <div className="right">
        {projectsArray.map(project => {
          return (
            <img key={project} src={`../../../public/images/${project}.png`}/>
          );
        })}
      </div>
    </section>
  );
}

export default PagePortfolio;