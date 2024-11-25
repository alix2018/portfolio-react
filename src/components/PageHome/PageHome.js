import React from "react";
import "./PageHome.css";
import ReactGA from "react-ga";
import Typewriter from "../Typewriter/Typewriter";
import LinkedinIcon from "../Icons/LinkedinIcon";
import GithubIcon from "../Icons/GithubIcon";
import scrollArrowSvg from "@/assets/scroll-arrow.svg";

const typewriterArray = [
  "Stéphanie",
  "a web developer",
  "French",
  "in Amsterdam",
];

function PageHome() {
  function onIconClick(event) {
    const iconName = event.currentTarget.title;
    ReactGA.event({
      category: "Click",
      action: `Click on icon ${iconName}`,
      label: "In home page",
    });
  }

  function onScrollingArrowsClicked() {
    ReactGA.event({
      category: "Click",
      action: "Click on scrolling arrows",
      label: "In home page",
    });
    const currentAnchor = document.querySelector("#portfolio");
    currentAnchor.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section id="home" className="home">
      <section className="gl-left-panel ">
        <p className="name animation-setup fade-in-upwards-animation">
          Stéphanie Alix 2
        </p>
        <h1 className="animation-setup fade-in-upwards-animation">I am</h1>
        <div
          className="arrows scrolling-animation desktop"
          onClick={onScrollingArrowsClicked}
        >
          <img src={scrollArrowSvg} />
          <img src={scrollArrowSvg} />
        </div>
      </section>
      <section className="gl-right-panel">
        <Typewriter
          className="typewriter animation-setup fade-in-upwards-animation"
          texts={typewriterArray}
        />
        <div className="icons desktop">
          <a
            href="https://www.linkedin.com/in/stephanie-alix/"
            className="linkedin-icon animation-setup fade-in-upwards-animation"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin"
            onClick={onIconClick}
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://github.com/alix2018"
            className="github-icon animation-setup fade-in-upwards-animation"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
            onClick={onIconClick}
          >
            <GithubIcon />
          </a>
        </div>
      </section>
    </section>
  );
}

export default PageHome;
