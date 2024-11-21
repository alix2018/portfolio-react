import React from "react";
import "./PageContact.css";
import ReactGA from "react-ga";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import githubIcon from "@/assets/icons/github.svg";

function PageContact() {
  function onIconClick(iconName) {
    ReactGA.event({
      category: "Click",
      action: `Click on icon ${iconName}`,
      label: "In contact page",
    });
  }

  return (
    <section id="contact" className="contact">
      <section className="left">
        <p className="copyright">
          © 2024 Stéphanie Alix. <br />
          All rights reserved.
        </p>
      </section>

      <section className="right">
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
                title="linkedin"
                onClick={() => {
                  onIconClick("Linkedin");
                }}
              >
                <img src={linkedinIcon} alt="linkedin icon" />
              </a>
              <a
                href="https://github.com/alix2018"
                target="_blank"
                rel="noopener noreferrer"
                title="github"
                onClick={() => {
                  onIconClick("Github");
                }}
              >
                <img src={githubIcon} alt="github icon" />
              </a>
            </div>
          </section>
          <footer>
            Available for new web projects,
            <br /> contact me!
          </footer>
        </article>
      </section>
    </section>
  );
}

export default PageContact;
