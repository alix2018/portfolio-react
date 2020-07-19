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
          <img src="../../../public/assets/self-picture.jpg" alt="Stéphanie Alix picture Portfolio Web"/>
        </div>
      </div>
      <div className="right">
        <article>
          <header>A bit more...</header>
          <header className="about-me-mobile">About me</header>
          <section>
            <p>
              I&apos;m a 25 year old girl who moved to Amsterdam 2 years ago.
              I studied in a <span>computer science</span> school in
              France and I always prefered the Web platform. I did 3 internships in this
              field and I&apos;m now a <span>Medior</span> Web developer. On my spare time
              I love <span>coding</span> and <span>keep learning</span>, not only about Web but
              also other languages and platforms.
              I’m also a big fan of <span>sports</span>! I really
              enjoy playing team sports with colleagues and friends. After moving to
              the Netherlands I also started <span>to travel</span>,
              explore new countries and learn about other cultures which
              I&apos;ve found fascinating!
            </p>
            <p className="about-me-mobile">
              I’m a 25 year old girl who moved to Amsterdam 2 years ago.
              I studied <span>computer science</span> in France and did 3 internships in this
              field. Now I&apos;m a <span>Medior</span> Web developer. On my spare time
              I love <span>coding</span> and <span>keep learning</span>. I also really
              enjoy playing <span>team sports</span> with colleagues and friends. After moving
              top the Netherlands I also started <span>to travel</span>,
              explore new countries and learn about other cultures.
            </p>
            <form method="get" action="./public/assets/cv.pdf" className="download-cv-mobile" target="_blank" rel="noopener noreferrer">
              <button type="submit" className="button" onClick={() => {onDownloadClick();}}>Download CV</button>
            </form>
          </section>
          <footer>about <span>me</span></footer>
        </article>
      </div>
    </section>

  );
}

export default PageAboutMe;