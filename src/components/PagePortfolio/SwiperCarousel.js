import React from "react";
import "./SwiperCarousel.css";

function SwiperCarousel({ projectsList }) {
  return (
    <div className="swiper-carousel">
      {projectsList.map((project, index) => {
        return (
          <div key={project.name} className="slide">
            <img className="image" src={project.image} alt={project.name} />
            <div className="info">
              <div className="line-swiper-carousel" />
              <div className="text-wrapper">
                <p className="index">0{index + 1}</p>
                <h1 className="title">{project.name}</h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SwiperCarousel;
