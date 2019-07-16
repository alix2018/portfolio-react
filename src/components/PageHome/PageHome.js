import React from 'react';
import './PageHome.css';
import Typewriter from '../Typewriter/Typewriter';

function PageHome() {
  return (
    <div id="home" className="home">
      <div className="left">
        <div className="full-name animated fadeInUp">
          Stéphanie Alix
        </div>
        <div className="iam animated fadeInUp">
          I am
        </div>
        <div className="arrow-1"/>
        <div className="arrow-2"/>
        <div className="arrow-3"/>
      </div>
      <div className="right">
        <Typewriter
          className="typewriter animated fadeInUp"
          period={200}
          fullTexts={['Web developer', 'From France', 'Working in Amsterdam']}
        />
        <div className="social">
          <form method="get" action="./public/assets/cv.pdf" className="btn-animation animated fadeInUp" target="_blank" rel="noopener noreferrer">
            <button type="button" className="button">Download CV</button>
          </form>
          <a href="https://www.linkedin.com/in/stephanie-alix/" className="linkedin-animation animated fadeInUp" target="_blank" rel="noopener noreferrer">
            <div className="linkedin"/>
          </a>
          <a href="https://join.skype.com/invite/ljzSCwTgKRyX" className="skype-animation animated fadeInUp" target="_blank" rel="noopener noreferrer">
            <div className="skype"/>
          </a>
          <a href="https://github.com/alix2018" className="github-animation animated fadeInUp" target="_blank" rel="noopener noreferrer">
            <div className="github"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PageHome;