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
  const [showModal, setShowModal] = useState('');

  function openModal(e, project) {
    e.preventDefault();
    setShowModal(project);
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
                onClick={e => {openModal(e, project);}}/>
            );
          })}
        </div>
        <LoyaltyApplication
          showModal={showModal === 'loyalty-application'}
          closeModal={e => {openModal(e, '');}}
        />
        <RetailerPortal
          showModal={showModal === 'retailer-portal'}
          closeModal={e => {openModal(e, '');}}
        />
        <Games
          showModal={showModal === 'games'}
          closeModal={e => {openModal(e, '');}}
        />
        <Chatbot
          showModal={showModal === 'facebook-chatbot'}
          closeModal={e => {openModal(e, '');}}
        />
      </section>
    </>
  );
}

export default PagePortfolio;