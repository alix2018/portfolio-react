import React, {useState, useEffect} from 'react';
import './PagePortfolio.css';
import ReactGA from 'react-ga';
import Pwa from '../Modals/ModalPwa/ModalPwa';
import RetailerPortal from '../Modals/ModalRePo/ModalRePo';
import Games from '../Modals/ModalGames/ModalGames';
import Chatbot from '../Modals/ModalChatbot/ModalChatbot';
import DisplayProjectTitles from './DisplayProjectTitles';
import DisplayCarousel from './DisplayCarousel';

import '../../scroll-snap-polyfill';

function PagePortfolio() {
  const projectsList = [
    {
      id: 1,
      class: 'pwa',
      name: 'Progressive Web Apps'
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  function openModal(project) {
    setShowModal(project);
    const burgerMenu = document.querySelector('#menuToggle');

    if (projects.includes(project)) {
      history.pushState(null, null, `?project=${project}`);
      ReactGA.pageview(`${project}`);
      burgerMenu.style.visibility = 'hidden';
    } else {
      history.pushState(null, null, '/');
      burgerMenu.style.visibility = 'visible';
      const menuBar = document.querySelector('ul.menu-effect');
      menuBar.style.pointerEvents = 'visible';
    }
  }

  function updateProjectsArray(currentProject) {
    if (activeProject.class === currentProject.class) {
      openModal(currentProject.class);
      return;
    }

    setActiveProject(currentProject);
    const differenceBetween = currentProject.id - activeProject.id;
    const projectsLength = projectsArray.length;
    const newArray = projectsArray.map((_p, index, arr) => {
      return arr[(projectsLength + index + differenceBetween) % projectsLength];
    });
    setProjectsArray(newArray);
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth <= 1024);
    });
    const url = window.location.search;
    if (url.substring(0, 9) === '?project=') {
      const query = url.split('=')[1];
      openModal(query);
    }
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      {isMobile &&
        <DisplayCarousel projectsList={projectsList} openModal={openModal}/>
      }
      {!isMobile &&
        <div id="desktop-carousel">
          <div className="left">
            <div className="titles">
              <DisplayProjectTitles projectsList={projectsList} activeProject={activeProject} updateProjectsArray={updateProjectsArray}/>
            </div>
          </div>
          <div className="right">
            {projectsArray.map(project => {
              return (
                <img key={project} className="isometric" src={`../../../public/assets/${project}-mobile.png`}
                  alt={`${project}`} onClick={() => {openModal(project);}}/>
              );
            })}
          </div>
        </div>
      }
      <Pwa
        showModal={showModal === 'pwa'}
        closeModal={() => {openModal('');}}
        isMobile={isMobile}
      />
      <RetailerPortal
        showModal={showModal === 'retailer-portal'}
        closeModal={() => {openModal('');}}
        isMobile={isMobile}
      />
      <Games
        showModal={showModal === 'games'}
        closeModal={() => {openModal('');}}
        isMobile={isMobile}
      />
      <Chatbot
        showModal={showModal === 'facebook-chatbot'}
        closeModal={() => {openModal('');}}
        isMobile={isMobile}
      />
    </section>
  );
}

export default PagePortfolio;