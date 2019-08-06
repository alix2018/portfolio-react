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
  const [activeProject, setActiveProject] = useState(projectsList[0].name);

  function clickOnProject(e, currentProject) {
    e.preventDefault();
    setActiveProject(currentProject);
  }

  return (
    <section id="portfolio" className="portfolio">
      <div className="left">
        <div className="titles">
          {projectsList.map((project, index) => {
            const isActive = project.name === activeProject;
            return (
              <React.Fragment key={project.id}>
                <section id={project.class}>
                  <h1 className={isActive ? 'active' : ''} onClick={e => {clickOnProject(e, project.name);}}>{project.name}</h1>
                  <div className="project-index">0{index + 1}</div>
                </section>
                {isActive && <div className={`line  ${project.class}`}/>}
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="right">
        {projectsList.map(project => {
          return (
            <img key={project.id} src={`../../../public/images/${project.class}.png`}/>
          );
        })}
      </div>
    </section>
  );
}

export default PagePortfolio;