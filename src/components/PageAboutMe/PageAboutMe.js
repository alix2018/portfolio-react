import React from 'react';
import './PageAboutMe.css';

function PageAboutMe() {
  return (
    <section id="about-me" className="about-me">
      <div className="left">
        <div className="img-container">
          <img src="../../../public/images/self-picture.jpg"/>
        </div>
      </div>
      <div className="right">
        <article>
          <header>Hey!</header>
          <section>
            <p>
              I’m a 24 year old girl who recently moved to Amsterdam
              to start my first job as a <span>web developer</span>. After an intensive
              mathematics school, I chose to integrate a <span>computer science
              school</span> in France. Among all the projects, I prefered Web
              development. That’s why I did my 3 internships in that
              field and got hired as a Junior Web developer.
              On my spare time
              I love coding and continue learning, not only Web but also <span>other
              platforms and languages</span>. I’m also a big fan of sport! I really
              enjoy playing <span>team sports</span> with colleagues and friends. After moving
              in the Netherland I also started <span>to travel</span>,
              explore new countries and learn about other cultures which
              I find fascinating!
            </p>
          </section>
          <footer>I am <span>ready</span></footer>
        </article>
      </div>
    </section>

  );
}

export default PageAboutMe;