import React from 'react';
import './PageHome.css';
import Typewriter from '../Typewriter/Typewriter';

function PageHome() {
  return (
    <div className="home">
      <div className="shape1"/>
      <div className="container">
        <div className="title animated fadeInUp">I am Stéphanie</div>
        <Typewriter
          period={200}
          fullTexts={['Web developer', 'From France', 'Working in Amsterdam']}
        />
        <div className="social animated fadeInUp">
          <a href="https://www.linkedin.com/in/stephanie-alix/" target="_blank" rel="noopener noreferrer">
            <div className="linkedin"/>
          </a>
          <a href="https://join.skype.com/invite/ljzSCwTgKRyX" target="_blank" rel="noopener noreferrer">
            <div className="skype"/>
          </a>
          <a href="https://github.com/alix2018" target="_blank" rel="noopener noreferrer">
            <div className="github"/>
          </a>
        </div>
        <form method="get" action="./public/assets/cv.pdf" className="btn-animation animated fadeInUp" target="_blank" rel="noopener noreferrer">
          <button type="button" className="button">Download CV</button>
        </form>
      </div>
    </div>
  );
}

export default PageHome;