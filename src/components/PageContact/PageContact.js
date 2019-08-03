import React from 'react';
import './PageContact.css';

function PageContact() {
  function clickArrowsUp(e) {
    e.preventDefault();
    const currentAnchor = document.querySelector('.home');
    currentAnchor.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  return (
    <section id="contact" className="contact">
      <div className="left">
        <div className="group-arrows" onClick={e => {clickArrowsUp(e);}}>
          <div className="arrow-1"/>
          <div className="arrow-2"/>
          <div className="arrow-3"/>
        </div>
        <div className="rights-reserved">© 2019. All Rights Reserved.</div>
        <div className="name">Stéphanie Alix</div>
      </div>

      <div className="right">
        <section>
          <h1>Get in touch.</h1>
          <div className="email">stephanie.alix95@gmail.com</div>
          <div className="country">Amsterdam, The Netherlands</div>
          <div className="icons">
            <a href="https://www.linkedin.com/in/stephanie-alix/" target="_blank" rel="noopener noreferrer">
              <div className="linkedin"/>
            </a>
            <a href="https://github.com/alix2018" target="_blank" rel="noopener noreferrer">
              <div className="github"/>
            </a>
            <a href="https://join.skype.com/invite/ljzSCwTgKRyX" target="_blank" rel="noopener noreferrer">
              <div className="skype"/>
            </a>
          </div>
        </section>
        <footer>
          Available for new web developing projects
        </footer>
      </div>
    </section>
  );
}

export default PageContact;