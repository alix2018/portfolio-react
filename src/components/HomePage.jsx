import React from 'react';
import './HomePage.css';

class HomePage extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="shape1"></div>
        <div className="container">
          <div className="title animated fadeInUp">I am Stéphanie Alix
            <a href="" className="typewrite" data-period="2000" data-type='["Stéphanie Alix", "Web Developer"]'>
              <span className="wrap"></span>
            </a>
          </div>
          <div className="social animated fadeInUp">
            <a href="https://www.linkedin.com/in/stephanie-alix/" target="_blank">
              <div className="linkedin"></div>
            </a>
            <a href="https://join.skype.com/invite/ljzSCwTgKRyX" target="_blank">
              <div className="skype"></div>
            </a>
            <a href="https://github.com/alix2018" target="_blank">
              <div className="github"></div>
            </a>
          </div>
          <form method="get" action="./public/assets/cv.pdf" className="btn-animation animated fadeInUp" target="_blank">
            <button className="button">Download CV</button>
          </form>
        </div>
        <h1>
          <a href="" class="typewrite" data-period="2000" data-type='[ "Hi, Im Si.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'>
            <span class="wrap"></span>
          </a>
        </h1>
        </React.Fragment>
    )
  }
};
export default HomePage;