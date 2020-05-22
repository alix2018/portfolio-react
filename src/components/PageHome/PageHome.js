import React from 'react';
import './PageHome.css';
import ReactGA from 'react-ga';
import Typewriter from '../Typewriter/Typewriter';
import LinkedinIcon from '../Icons/LinkedinIcon';
import SkypeIcon from '../Icons/SkypeIcon';
import GithubIcon from '../Icons/GithubIcon';

function PageHome() {
  function onDownloadClick() {
    ReactGA.event({
      category: 'Click',
      action: 'Click on Download CV',
      label: 'In home page'
    });
  }

  function onIconClick(iconName) {
    ReactGA.event({
      category: 'Click',
      action: `Click on icon ${iconName}`,
      label: 'In home page'
    });
  }

  return (
    <section id="home" className="home">
      <div className="left top">
        <div className="name fadeInUp">
          Stéphanie Alix
        </div>
        <h1 className="fadeInUp">
          I am
        </h1>
        <img className="scrolling-animation" src="../../../public/assets/icons/scroll-arrow.svg"/>
        <img className="scrolling-animation" src="../../../public/assets/icons/scroll-arrow.svg"/>
      </div>
      <div className="right bottom">
        <Typewriter
          className="typewriter fadeInUp"
          texts={['Stéphanie', 'a web developer', 'in Amsterdam']}
        />
        <div className="icons">
          <form method="get" action="./public/assets/cv.pdf" className="btn-animation fadeInUp" target="_blank" rel="noopener noreferrer">
            <button type="submit" className="button" onClick={() => {onDownloadClick();}}>Download CV</button>
          </form>
          <a href="https://www.linkedin.com/in/stephanie-alix/" className="linkedin-animation fadeInUp" target="_blank" rel="noopener noreferrer" title="linkedin logo" onClick={() => {onIconClick('Linkedin');}}>
            <LinkedinIcon/>
          </a>
          <a href="https://github.com/alix2018" className="github-animation fadeInUp" target="_blank" rel="noopener noreferrer" title="github logo" onClick={() => {onIconClick('Github');}}>
            <GithubIcon/>
          </a>
          <a href="https://join.skype.com/invite/ljzSCwTgKRyX" className="skype-animation fadeInUp" target="_blank" rel="noopener noreferrer" title="skype logo" onClick={() => {onIconClick('Skype');}}>
            <SkypeIcon/>
          </a>
        </div>
      </div>
    </section>
  );
}

export default PageHome;