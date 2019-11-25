import React from 'react';
import ReactGA from 'react-ga';
import './PageAboutMe.css';

function PageAboutMe() {
  function onDownloadClick() {
    ReactGA.event({
      category: 'Click',
      action: 'Click on Download CV',
      label: 'In home page'
    });
  }

  return (
    <section id="about-me" className="about-me">
      <div className="left bottom">
        <div className="img-container">
          <img src="../../../public/assets/self-picture.jpg" alt="picture of me"/>
        </div>
      </div>
      <div className="right">
        <article>
          <header>Hey!</header>
          <section>
            <p>
              I’m a 24 year old girl who recently moved to Amsterdam
              for a <span>web developer</span> job. After an intensive
              mathematics school, I chose to integrate a <span>computer science school</span> in
              France. Among all the projects, I prefered Web
              development. That’s why I did my 3 internships in that
              field and got hired as a Junior Web developer. On my spare time
              I love coding and continue learning, not only Web but
              also <span>other platforms and languages</span>. I’m also a big fan of sport! I really
              enjoy playing <span>team sports</span> with colleagues and friends. After moving
              in the Netherland I also started <span>to travel</span>,
              explore new countries and learn about other cultures which
              I find fascinating!
            </p>
            <p className="about-me-mobile">
              I’m a 24 year old girl who recently moved to Amsterdam
              for a <span>web developer</span> job. I studied in a computer
              science <span>engineering school</span> in France. I did my 3 internships in web
              field and got hired as a Junior Web developer. On my spare time
              I love coding and continue learning. I also really
              enjoy playing <span>team sports</span> with colleagues and friends. After moving
              in the Netherland I also started <span>to travel</span>,
              explore new countries and learn about other cultures.
            </p>
            <form method="get" action="./public/assets/cv.pdf" className="download-cv-mobile" target="_blank" rel="noopener noreferrer">
              <button type="submit" className="button" onClick={() => {onDownloadClick();}}>Download CV</button>
            </form>
          </section>
          <footer>I am <span>ready</span></footer>
        </article>
      </div>
    </section>

  );
}

export default PageAboutMe;