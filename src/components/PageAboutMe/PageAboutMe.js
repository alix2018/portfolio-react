import React from 'react';
import './PageAboutMe.css';

function PageAboutMe() {
  return (
    <section id="about-me" className="about-me">
      <div className="left">
        <div className="img-container">
          <img src="../../../public/images/self-picture.jpg"/>
          <form method="get" action="./public/assets/cv.pdf" className="btn-animation animated fadeInUp" target="_blank" rel="noopener noreferrer">
            <input type="submit" className="button" value="Click here to download my CV"/>
          </form>
        </div>
      </div>
      <div className="right">
        <article>
          <header>Hey!</header>
          <section>
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
          </section>
          <footer>I am <span>ready</span></footer>
        </article>
      </div>
    </section>

  );
}

export default PageAboutMe;