import React, {useState} from 'react';
import './PagePortfolio.css';
import DisplayProjectsTitle from './DisplayProjectsTitle';

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

  const projects = projectsList.map(element => element.class); // Initialize list of project
  const [projectsArray, setProjectsArray] = useState(projects);

  return (
    <section id="portfolio" className="portfolio">
      <div className="left">
        <div className="titles">
          <DisplayProjectsTitle list={projectsList} projectsArray={projectsArray} setProjectsArray={setProjectsArray}/>
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