import React from 'react';
import './PageHome.css';
import Typewriter from '../Typewriter/Typewriter';

function PageHome() {
  return (
    <section id="home" className="home">
      <div className="left">
        <p className="animated fadeInUp">
          Stéphanie Alix
        </p>
        <h1 className="animated fadeInUp">
          I am
        </h1>
        <div className="arrow-1"/>
        <div className="arrow-2"/>
        <div className="arrow-3"/>

        {/* <div className="groupe-test">
          <a href="#" data-hover="TEST1" className="active">TEST1</a>
          <a href="#" data-hover="TEST2" className="">TEST2</a>
        </div>

        <ul class="snip1168">
          <li class="current"><a href="#" data-hover="Home">Home</a></li>
          <li><a href="#" data-hover="About Us">About Us</a></li>
          <li><a href="#" data-hover="Blog">Blog</a></li>
          <li><a href="#" data-hover="Services">Services</a></li>
          <li><a href="#" data-hover="Products">Products</a></li>
          <li><a href="#" data-hover="Contact">Contact</a></li>
        </ul> */}

      </div>
      <div className="right">
        <Typewriter
          className="typewriter animated fadeInUp"
          period={200}
          fullTexts={['Web developer', 'From France', 'Working in Amsterdam']}
        />
        <div className="icons">
          <form method="get" action="./public/assets/cv.pdf" className="btn-animation animated fadeInUp" target="_blank" rel="noopener noreferrer">
            <button type="button" className="button">Download CV</button>
          </form>
          <a href="https://www.linkedin.com/in/stephanie-alix/" className="linkedin-animation animated fadeInUp" target="_blank" rel="noopener noreferrer">
            <div className="linkedin"/>
          </a>
          <a href="https://join.skype.com/invite/ljzSCwTgKRyX" className="skype-animation animated fadeInUp" target="_blank" rel="noopener noreferrer">
            <div className="skype"/>
          </a>
          <a href="https://github.com/alix2018" className="github-animation animated fadeInUp" target="_blank" rel="noopener noreferrer">
            <div className="github"/>
          </a>
        </div>
      </div>
    </section>
  );
}

export default PageHome;