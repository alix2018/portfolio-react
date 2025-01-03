import React from "react";
import "./ProjectSwitcher.css";

function ProjectSwitcher({ projectTabs, selectedTab, setSelectedTab }) {
  return (
    <div className="project-switcher">
      {projectTabs.map((tabName, index) => {
        return (
          <a
            key={`${tabName}-${index}`}
            className={`styled-button ${
              selectedTab === tabName ? "active" : ""
            }`}
            onClick={() => {
              setSelectedTab(tabName);
            }}
          >
            {tabName}
          </a>
        );
      })}
    </div>
  );
}

export default ProjectSwitcher;
