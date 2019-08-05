import React from 'react';
import './PagePortfolio.css';

function PagePortfolio() {
  const projectsList = ['Loyalty Application', 'Retailer Portal', '2D Games', 'Facebook Chatbot'];
  const projectPictures = ['loyalty-application', 'retailer-portal', '2d-game', 'facebook-chatbot'];

  return (
    <section id="portfolio" className="portfolio">
      <div className="left">
        <div className="titles">
          {projectsList.map((projectName, index) => {
            return (
              <section key={projectName}>
                <h1>{projectName}</h1>
                <div className="project-index">0{index + 1}</div>
              </section>
            );
          })}
        </div>
      </div>
      <div className="right">
        {projectPictures.map(project => {
          return <img key={project} src={`../../../public/images/${project}.png`}/>;
        })}
      </div>
    </section>
  );
}

export default PagePortfolio;