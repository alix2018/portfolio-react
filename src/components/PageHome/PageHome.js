import React from 'react';
import './PageHome.css';
import ReactGA from 'react-ga';
import Typewriter from '../Typewriter/Typewriter';
import LinkedinIcon from '../Icons/LinkedinIcon';
import GithubIcon from '../Icons/GithubIcon';
import TwitterIcon from '../Icons/TwitterIcon';

function PageHome() {
  function onIconClick(iconName) {
    ReactGA.event({
      category: 'Click',
      action: `Click on icon ${iconName}`,
      label: 'In home page'
    });
  }

  function onScrollingArrowsClicked() {
    ReactGA.event({
      category: 'Click',
      action: 'Click on scrolling arrows',
      label: 'In home page'
    });
    const currentAnchor = document.querySelector('.portfolio');
    currentAnchor.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  return (
    <section id="home" className="home">
      <div className="left top">
        <h2 className="name animated fadeInUp">
          Stéphanie Alix
        </h2>
        <h1 className="animated fadeInUp">
          I am
        </h1>
        <div className="scrolling-animation" onClick={onScrollingArrowsClicked}>
          <img src="../../../public/assets/icons/scroll-arrow.svg"/>
          <img src="../../../public/assets/icons/scroll-arrow.svg"/>
        </div>
      </div>
      <div className="right bottom">
        <Typewriter
          className="typewriter animated fadeInUp"
          texts={['Stéphanie', 'a web developer', 'in Amsterdam']}
        />
        <div className="icons">
          <a href="https://www.linkedin.com/in/stephanie-alix/" className="linkedin-animation animated fadeInUp" target="_blank" rel="noopener noreferrer" title="linkedin logo" onClick={() => {onIconClick('Linkedin');}}>
            <LinkedinIcon/>
          </a>
          <a href="https://github.com/alix2018" className="github-animation animated fadeInUp" target="_blank" rel="noopener noreferrer" title="github logo" onClick={() => {onIconClick('Github');}}>
            <GithubIcon/>
          </a>
          <a href="https://twitter.com/StephanieAlix95" target="_blank" className="twitter-animation animated fadeInUp" rel="noopener noreferrer" title="twitter logo" onClick={() => {onIconClick('Twitter');}}>
            <TwitterIcon/>
          </a>
        </div>
      </div>
    </section>
  );
}

export default PageHome;