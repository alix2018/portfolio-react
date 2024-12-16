import React, { useState, useEffect } from "react";
import "./PagePortfolio.css";
import wasteSaverPlatformMockup from "@/assets/work-waste-saver-platform-mockup.png";
import partnerPortalMockup from "@/assets/work-partner-portal-mockup.png";
import pwaMockup from "@/assets/work-pwa-mockup.png";
import gamesMockup from "@/assets/work-2d-games-mockup.png";
import ReactGA from "react-ga";
import DisplayProjectNames from "./DisplayProjectNames";

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
      class: "list-up",
      name: "List up!",
    },
    {
      id: 2,
      class: "lwfp",
      name: "Less Waste For the Planet",
    },
    {
      id: 3,
      class: "worldmappie",
      name: "WorldMappie",
    },
    {
      id: 4,
      class: "portfolio",
      name: "Portfolio",
    },
  ];

  const [projectsList, setProjectsList] = useState(workProjectsList);
  const [projectImages, setProjectImages] = useState(projectsList);
  const [activeProject, setActiveProject] = useState(projectsList[0]);

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
      <section className="gl-left-panel">
        <DisplayProjectNames
          projectsList={projectsList}
          activeProject={activeProject}
          updateActiveProject={updateActiveProject}
        />
      </section>
      <section className="gl-right-panel">
        {projectImages.map((project) => {
          return (
            <div className="image-container">
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
    </section>
  );
}

export default PagePortfolio;
