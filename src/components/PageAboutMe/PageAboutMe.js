import React from 'react';
import './PageAboutMe.css';

function PageAboutMe() {
  return (
    <div id="about-me" className="about-me">
      <div className="left-aboutme">
        <div className="img-container">
          <img src="../../../public/images/self-picture.jpg"/>
          <div className="text-img">
            Short sentence about myself or photo description.
          </div>
        </div>
      </div>
      <div className="right-aboutme">
        <section>
          <h1>Hey!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum culpa qu
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum culpa qu
          </p>
          <div className="title-end">I am <span className="ready">ready</span></div>
        </section>
      </div>
    </div>

  );
}

export default PageAboutMe;