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
  const [selectedTab, setSelectedTab] = useState("work");
  const [projectImages, setProjectImages] = useState(projectsList);
  const [activeProject, setActiveProject] = useState(projectsList[0]);
  const isDesktop = useScreenSize();

  function updateActiveProject(selectedProject) {
    setActiveProject(selectedProject);
    const shiftAmount = selectedProject.id - activeProject.id;
    const updatedProjectImages = projectImages.map((_, index, arr) => {
      return arr[(index + shiftAmount + arr.length) % arr.length];
    });
    setProjectImages(updatedProjectImages);
  }

  function switchTab(selectedTab) {
    console.log("selectedTab", selectedTab);
    if (selectedTab === "work") {
      setProjectsList(workProjectsList);
      setProjectImages(workProjectsList);
      setActiveProject(workProjectsList[0]);
    } else {
      setProjectsList(personalProjectsList);
      setProjectImages(personalProjectsList);
      setActiveProject(personalProjectsList[0]);
    }
    setSelectedTab(selectedTab);
  }

  return (
    <section id="portfolio" className="portfolio">
      {isDesktop && (
        <>
          <section className="gl-left-panel">
            <div className="projects-list">
              <div className="tabs">
                <a
                  className={`styled-button ${
                    selectedTab === "work" ? "active" : ""
                  }`}
                  onClick={() => {
                    switchTab("work");
                  }}
                >
                  Work
                </a>
                <a
                  className={`styled-button ${
                    selectedTab === "perso" ? "active" : ""
                  }`}
                  onClick={() => {
                    switchTab("perso");
                  }}
                >
                  Perso
                </a>
              </div>
              <DisplayProjectNames
                projectsList={projectsList}
                activeProject={activeProject}
                updateActiveProject={updateActiveProject}
              />
            </div>
          </section>

          <section className="gl-right-panel" isDesktop={false}>
            {/* TODO: Add arrow icon */}
            {/* TODO: Add animation on hover */}
            {projectImages.map((project) => {
              return (
                <div className="tile">
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
        <section className="carousel mobile tablet">
          <SwiperCarousel projectsList={projectImages}></SwiperCarousel>
        </section>
      )}
    </section>
  );
}

export default PagePortfolio;
