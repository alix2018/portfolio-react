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
      <section className="left top">
        <p className="name animated fadeInUp">Stéphanie Alix 2</p>
        <h1 className="animated fadeInUp">I am</h1>
        <div className="scrolling-animation" onClick={onScrollingArrowsClicked}>
          <img src={scrollArrowSvg} />
          <img src={scrollArrowSvg} />
        </div>
      </section>
      <section className="right bottom">
        <Typewriter
          className="typewriter animated fadeInUp"
          texts={typewriterArray}
        />
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/stephanie-alix/"
            className="linkedin-animation animated fadeInUp"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin"
            onClick={onIconClick}
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://github.com/alix2018"
            className="github-animation animated fadeInUp"
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
