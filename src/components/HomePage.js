import React from 'react';
import './HomePage.css';
import Typewriter from './Typewriter';

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="shape1"></div>
        <div className="container">
          <div className="title animated fadeInUp">I am Stéphanie</div>
          <Typewriter
              period={200}
              fullTexts={["French", "Web developer", "Work at Ice"]}
            />
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
        </React.Fragment>
    )
  }
};
export default HomePage;