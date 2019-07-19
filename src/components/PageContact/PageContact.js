import React from 'react';
import './PageContact.css';

function PageContact() {
  return (
    <div id="contact" className="contact">
      <div className="left-contact">
        <div className="arrow-4"/>
        <div className="arrow-5"/>
        <div className="arrow-6"/>
        <div className="rights-reserved">© 2019. All Rights Reserved.</div>
        <div className="name">Stéphanie Alix</div>
      </div>

      <div className="right-contact">
        <div className="group-contact">
          <div className="title-contact">Get in touch.</div>
          <div className="email">stephanie.alix95@gmail.com</div>
          <div className="country">Amsterdam, The Netherlands</div>
          <div className="group-icons">
            <a href="https://www.linkedin.com/in/stephanie-alix/" target="_blank" rel="noopener noreferrer">
              <div className="linkedin-icon"/>
            </a>
            <a href="https://join.skype.com/invite/ljzSCwTgKRyX" target="_blank" rel="noopener noreferrer">
              <div className="skype-icon"/>
            </a>
            <a href="https://github.com/alix2018" target="_blank" rel="noopener noreferrer">
              <div className="github-icon"/>
            </a>
          </div>
        </div>
        <div className="end-sentence">
          Available for new web developing projects      
      </div>
    </div>
  </div>
  );
}

export default PageContact;