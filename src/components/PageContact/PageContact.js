import React from "react";
import "./PageContact.css";
import ReactGA from "react-ga";
import LinkedinIcon from "../Icons/LinkedinIcon";
import GithubIcon from "../Icons/GithubIcon";

function PageContact() {
  function onIconClick(event) {
    const iconName = event.currentTarget.title;
    ReactGA.event({
      category: "Click",
      action: `Click on icon ${iconName}`,
      label: "In contact page",
    });
  }

  return (
    <section id="contact" className="contact">
      <section className="gl-left-panel ">
        <p className="copyright">
          © 2024 Stéphanie Alix. <br />
          All rights reserved.
        </p>
      </section>

      <section className="gl-right-panel">
        <article>
          <section className="content">
            <h1>Get in touch.</h1>
            <a className="email" href="mailto:stephanie.alix95@gmail.com">
              stephanie.alix95@gmail.com
            </a>
            <p className="country">Amsterdam, The Netherlands</p>
            <div className="icons">
              <a
                href="https://www.linkedin.com/in/stephanie-alix/"
                target="_blank"
                rel="noopener noreferrer"
                title="Linkedin"
                onClick={onIconClick}
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://github.com/alix2018"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
                onClick={onIconClick}
              >
                <GithubIcon />
              </a>
            </div>
          </section>
          <footer className="desktop tablet">
            Available for new web projects,
            <br /> contact me!
          </footer>
        </article>
      </section>
    </section>
  );
}

export default PageContact;
