import React, {useState} from 'react';
import './PagePortfolio.css';
import LoyaltyApplication from '../Modals/ModalLoyaltyApplication/ModalLoyaltyApplication';
import RetailerPortal from '../Modals/ModalRePo/ModalRePo';
import Games from '../Modals/ModalGames/ModalGames';
import Chatbot from '../Modals/ModalChatbot/ModalChatbot';
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

  const projects = projectsList.map(element => element.class);
  const [projectsArray, setProjectsArray] = useState(projects);
  const [activeProject, setActiveProject] = useState(projectsList[0]);
  const [showModalLoyaltyApp, setShowModalLoyaltyApp] = useState(false);
  const [showModalRetailerPortal, setShowModalRetailerPortal] = useState(false);
  const [showModalGames, setShowModalGames] = useState(false);
  const [showModalChatbot, setShowModalChatbot] = useState(false);

  function openModal(e, project, show) {
    e.preventDefault();
    switch (project) {
      case 'loyalty-application':
        setShowModalLoyaltyApp(show);
        break;
      case 'retailer-portal':
        setShowModalRetailerPortal(show);
        break;
      case 'games':
        setShowModalGames(show);
        break;
      case 'facebook-chatbot':
        setShowModalChatbot(show);
        break;
      default:
    }
  }

  function updateProjectsArray(currentProject) {
    setActiveProject(currentProject);
    const differenceBetween = currentProject.id - activeProject.id;
    const projectsLength = projectsArray.length;
    const newArray = projectsArray.map((_p, index, arr) => {
      return arr[(projectsLength + index + differenceBetween) % projectsLength];
    });
    setProjectsArray(newArray);
  }

  return (
    <>
      <section id="portfolio" className="portfolio">
        <div className="left">
          <div className="titles">
            <DisplayProjectTitles projectsList={projectsList} activeProject={activeProject} updateProjectsArray={updateProjectsArray}/>
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
        <LoyaltyApplication
          showModal={showModalLoyaltyApp}
          closeModal={e => {openModal(e, 'loyalty-application', false);}}
        />
        <RetailerPortal
          showModal={showModalRetailerPortal}
          closeModal={e => {openModal(e, 'retailer-portal', false);}}
        />
        <Games
          showModal={showModalGames}
          closeModal={e => {openModal(e, 'games', false);}}
        />
        <Chatbot
          showModal={showModalChatbot}
          closeModal={e => {openModal(e, 'facebook-chatbot', false);}}
        />
      </section>
    </>
  );
}

export default PagePortfolio;