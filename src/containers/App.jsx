import React from 'react';
import './App.css';

class App extends React.Component {
  render () {
    return (
    <React.Fragment>
      <div className="Shape1"></div>
      <div className="Container">
        <div className="Title Animated FadeInUp">I am Stéphanie Alix</div>
        <div className="Social Animated FadeInUp">
          <a href="https://www.linkedin.com/in/stephanie-alix/" target="_blank">
            <div className="Linkedin"></div>
          </a>
          <a href="https://join.skype.com/invite/ljzSCwTgKRyX" target="_blank">
            <div className="Skype"></div>
          </a>
          <a href="https://github.com/alix2018" target="_blank">
            <div className="Github"></div>
          </a>
        </div>
        <div>
          <button className="Button Animated FadeInUp">Download CV</button>
        </div>
      </div>
    </React.Fragment>
    );
  }
}

export default App;