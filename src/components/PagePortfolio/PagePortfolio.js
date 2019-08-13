import React, {useState} from 'react';
import ModalLoyaltyApplication from '../Modals/ModalLoyaltyApplication';
import './PagePortfolio.css';
import DisplayProjectTitles from './DisplayProjectTitles';

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
  const [showModalLoyaltyApp, setShowModalLoyaltyApp] = useState(false);

  function openModal(e, project, show) {
    e.preventDefault();
    switch (project) {
      case 'loyalty-application':
        setShowModalLoyaltyApp(show);
        break;
      default:
    }
  }

  return (
    <>
      <section id="portfolio" className="portfolio">
        <div className="left">
          <div className="titles">
            <DisplayProjectTitles list={projectsList} projectsArray={projectsArray} setProjectsArray={setProjectsArray}/>
          </div>
        </div>
        <div className="right">
          {projectsArray.map(project => {
            return (
              <img key={project} className="isometric" src={`../../../public/images/${project}.png`}
                onClick={e => {openModal(e, project, true);}}/>
            );
          })}
        </div>
        <ModalLoyaltyApplication
          showModal={showModalLoyaltyApp}
          closeModal={e => {openModal(e, 'loyalty-application', false);}}
        />
      </section>
    </>
  );
}

export default PagePortfolio;