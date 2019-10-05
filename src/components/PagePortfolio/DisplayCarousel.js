import React from 'react';
import './DisplayCarousel.css';

function DisplayCarousel({project, index, openModal}) {
  return (
    <div className="tile">
      <img className="isometric" src={`../../../public/images/isometric/${project.class}.png`}
        onClick={() => {openModal(project.class);}}/>
      <div className="carousel-text">
        <div className="line-carousel"/>
        <div className="project-names-container">
          <div className="project-index">0{index + 1}</div>
          <div className="title">
            {project.name}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayCarousel;
