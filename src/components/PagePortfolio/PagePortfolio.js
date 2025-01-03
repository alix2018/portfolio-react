import React, { useState, useEffect } from "react";
import "./PagePortfolio.css";
import wasteSaverPlatformMockup from "@/assets/work-waste-saver-platform-mockup.png";
import partnerPortalMockup from "@/assets/work-partner-portal-mockup.png";
import pwaMockup from "@/assets/work-pwa-mockup.png";
import gamesMockup from "@/assets/work-2d-games-mockup.png";
import listUpMockup from "@/assets/perso-list-up-mockup.png";
import lwfpMockup from "@/assets/perso-lwfp-mockup.png";
import worldmappieMockup from "@/assets/perso-worldmappie-mockup.png";
import portfolioMockup from "@/assets/perso-portfolio-mockup.png";
import ReactGA from "react-ga";
import DisplayProjectNames from "./DisplayProjectNames";
import ProjectSwitcher from "./ProjectSwitcher";
import SwiperCarousel from "./SwiperCarousel";
import { useScreenSize } from "@/hooks";

function PagePortfolio() {
  const workProjectsList = [
    {
      id: 1,
      image: wasteSaverPlatformMockup,
      name: "Waste Saver Platform",
    },
    {
      id: 2,
      image: partnerPortalMockup,
      name: "Partner Portal",
    },
    {
      id: 3,
      image: pwaMockup,
      name: "Progressive Web Apps",
    },
    {
      id: 4,
      image: gamesMockup,
      name: "2D Games",
    },
  ];

  const personalProjectsList = [
    {
      id: 1,
      image: listUpMockup,
      name: "List up!",
    },
    {
      id: 2,
      image: lwfpMockup,
      name: "Less Waste For the Planet",
    },
    {
      id: 3,
      image: worldmappieMockup,
      name: "WorldMappie",
    },
    {
      id: 4,
      image: portfolioMockup,
      name: "Portfolio",
    },
  ];

  const [projectsList, setProjectsList] = useState(workProjectsList);
  const [projectImages, setProjectImages] = useState(projectsList);
  const [activeProject, setActiveProject] = useState(projectsList[0]);
  const WORK = "work";
  const PERSO = "perso";
  const projectTabs = [WORK, PERSO];
  const [selectedTab, setSelectedTab] = useState(projectTabs[0]);
  const isDesktop = useScreenSize();

  useEffect(() => {
    if (selectedTab === WORK) {
      setProjectsList(workProjectsList);
      setProjectImages(workProjectsList);
      setActiveProject(workProjectsList[0]);
    } else {
      setProjectsList(personalProjectsList);
      setProjectImages(personalProjectsList);
      setActiveProject(personalProjectsList[0]);
    }
  }, [selectedTab]);

  function updateActiveProject(selectedProject) {
    setActiveProject(selectedProject);
    const shiftAmount = selectedProject.id - activeProject.id;
    const updatedProjectImages = projectImages.map((_, index, arr) => {
      return arr[(index + shiftAmount + arr.length) % arr.length];
    });
    setProjectImages(updatedProjectImages);
  }

  return (
    <section id="portfolio" className="portfolio">
      {isDesktop && (
        <>
          <section className="gl-left-panel">
            <div className="projects-list">
              <ProjectSwitcher
                projectTabs={projectTabs}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
              <DisplayProjectNames
                projectsList={projectsList}
                activeProject={activeProject}
                updateActiveProject={updateActiveProject}
              />
            </div>
          </section>

          <section className="gl-right-panel">
            {/* TODO: Add arrow icon */}
            {/* TODO: Add animation on hover */}
            {projectImages.map((project) => {
              return (
                <div className="tile" key={`${project.name}-${project.id}`}>
                  <img
                    key={project.name}
                    className="project-image"
                    src={project.image}
                    alt={project.name}
                    onClick={() => {
                      console.log("Open modal!");
                    }}
                  />
                </div>
              );
            })}
          </section>
        </>
      )}

      {!isDesktop && (
        <section className="carousel-wrapper">
          <ProjectSwitcher
            projectTabs={projectTabs}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
          <SwiperCarousel projectsList={projectImages}></SwiperCarousel>
        </section>
      )}
    </section>
  );
}

export default PagePortfolio;
