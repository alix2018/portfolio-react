import React from 'react';
import './PageContact.css';
import ReactGA from 'react-ga';
import LinkedinIcon from '../Icons/LinkedinIcon';
import SkypeIcon from '../Icons/SkypeIcon';
import GithubIcon from '../Icons/GithubIcon';

function PageContact() {
  function onIconClick(iconName) {
    ReactGA.event({
      category: 'Click',
      action: `Click on icon ${iconName}`,
      label: 'In contact page'
    });
  }

  return (
    <section id="contact" className="contact">
      <div className="left">
        <div className="rights-reserved">© 2020. All Rights Reserved.</div>
        <div className="name">Stéphanie Alix</div>
      </div>

      <div className="right mobile">
        <section>
          <h1>Get in touch.</h1>
          <div className="email">stephanie.alix95@gmail.com</div>
          <div className="country">Amsterdam, The Netherlands</div>
          <div className="icons">
            <a href="https://www.linkedin.com/in/stephanie-alix/" target="_blank" rel="noopener noreferrer" title="linkedin logo" onClick={() => {onIconClick('Linkedin');}}>
              <LinkedinIcon/>
            </a>
            <a href="https://github.com/alix2018" target="_blank" rel="noopener noreferrer" title="github logo" onClick={() => {onIconClick('Github');}}>
              <GithubIcon/>
            </a>
            <a href="https://join.skype.com/invite/ljzSCwTgKRyX" target="_blank" rel="noopener noreferrer" title="skype logo" onClick={() => {onIconClick('Skype');}}>
              <SkypeIcon/>
            </a>
          </div>
        </section>
        <footer>
          Available for new web projects, contact me!
        </footer>
      </div>
    </section>
  );
}

export default PageContact;