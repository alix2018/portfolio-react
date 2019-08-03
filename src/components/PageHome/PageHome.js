import React from 'react';
import './PageHome.css';
import Typewriter from '../Typewriter/Typewriter';

function PageHome() {
  function clickArrowsDown(e) {
    e.preventDefault();
    const currentAnchor = document.querySelector('.contact');
    currentAnchor.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  return (
    <section id="home" className="home">
      <div className="left">
        <div className="name animated fadeInUp">
          Stéphanie Alix
        </div>
        <h1 className="animated fadeInUp">
          I am
        </h1>
        <div className="group-arrows animated fadeInUp" onClick={e => {clickArrowsDown(e);}}>
          <div className="arrow-1"/>
          <div className="arrow-2"/>
          <div className="arrow-3"/>
        </div>
      </div>
      <div className="right">
        <Typewriter
          className="typewriter animated fadeInUp"
          period={200}
          fullTexts={['Stéphanie', 'web developer', 'in Amsterdam']}
        />
        <div className="icons">
          <form method="get" action="./public/assets/cv.pdf" className="btn-animation animated fadeInUp" target="_blank" rel="noopener noreferrer">
            <button type="button" className="button">Download CV</button>
          </form>
          <a href="https://www.linkedin.com/in/stephanie-alix/" className="linkedin-animation animated fadeInUp" target="_blank" rel="noopener noreferrer">
            <div className="linkedin"/>
          </a>
          <a href="https://github.com/alix2018" className="github-animation animated fadeInUp" target="_blank" rel="noopener noreferrer">
            <div className="github"/>
          </a>
          <a href="https://join.skype.com/invite/ljzSCwTgKRyX" className="skype-animation animated fadeInUp" target="_blank" rel="noopener noreferrer">
            <div className="skype"/>
          </a>
        </div>
      </div>
    </section>
  );
}

export default PageHome;