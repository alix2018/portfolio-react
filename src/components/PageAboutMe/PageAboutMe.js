import React from 'react';
import './PageAboutMe.css';

function PageAboutMe() {
  return (
    <section id="about-me" className="about-me">
      <div className="left">
        <div className="img-container">
          <img src="../../../public/images/self-picture.jpg"/>
          {/* <form method="get" action="./public/assets/cv.pdf" className="btn-animation animated fadeInUp" target="_blank" rel="noopener noreferrer">
            <input type="submit" className="button" value="Click here to download my CV"/>
          </form> */}
          <p>Develop a passion for learning. If you do, you will never cease to grow.</p>
        </div>
      </div>
      <div className="right">
        <article>
          <header>Hey!</header>
          <section>
          I’m a 24 year old girl who recently moved to Amsterdam
          to start my first job as a web developer. After an intensive
          mathematics school, I chose to integrate a computer science
          school in France. Among all the projects, I prefered Web
          development. That’s why I did my 3 internships in that
          field and got hired as a Junior Web developer. On my spare time
          I love coding and continue learning, not only Web but also other
          platforms and languages. I’m also a big fan of sport! I really
          enjoy playing team sports with colleagues and friends and I
          also practise some individual sports on the side. Since I finished
          school and moved to the Netherlands I also started to travel,
          explore new countries and learn more about other cultures which
          I find fascinating!
          </section>
          <footer>I am <span>ready</span></footer>
        </article>
      </div>
    </section>

  );
}

export default PageAboutMe;