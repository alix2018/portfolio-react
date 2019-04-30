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
          <div>
            <button className="button animated fadeInUp">Download CV</button>
          </div>
        </div>
        </React.Fragment>
    )
  }
};
export default HomePage;