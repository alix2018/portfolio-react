import React from "react";
import "./PageAboutMe.css";
import profileImg from "@/assets/profile-picture.jpg";
import podcastImg from "@/assets/podcast.png";
import equalsImg from "@/assets/equals.png";

function PageAboutMe() {
  return (
    <section id="about-me" className="about-me">
      <section className="left img-container">
        {/* TODO: Change picture on hover */}
        <img
          src={profileImg}
          alt="Stéphanie Alix picture Portfolio Web"
          className="profile-img"
        />
      </section>
      <article className="right">
        <div className="content">
          <h1 className="top">A bit more...</h1>
          <section className="text">
            <p>
              I&apos;m 29 year old, I <b>studied</b> computer science in France
              and I always liked web. I moved to <b>Amsterdam</b> 7 years ago
              and I&apos;ve worked as a <b>web developer </b>
              since. I like coding projects on the side to
              <b> continue learning</b>, to make nice apps to share comething I
              care about or that can be useful for me or my friends.{" "}
            </p>
            <p>
              On my spare time I love <b>reading</b>. It can be any type of
              novels, adventures, psychological or self-development books. I
              also enjoy <b>sports</b> very much. It can be going to the gym,
              swimming, running or any team sports with friends. I also found
              recently a new passion for <b>crochet</b>! Besides that I also
              like to <b>travel</b>, learn new languages and about different
              cultures.
            </p>
            <h1 className="bottom">
              ...about <span>me</span>
            </h1>
          </section>

          <section className="network">
            <h3>You might have seen me there:</h3>
            <div className="cards-container">
              <a
                className="card"
                href="https://double-slash.dev/podcasts/progressive-web-app/"
                target="_blank"
              >
                <p>Main guess in a French podcast about progressive web apps</p>
                <img src={podcastImg} alt="Slash podacst about PWA"></img>
              </a>

              <a
                className="card"
                href="https://equals.nl/stephaniealix/"
                target="_blank"
              >
                <p>Role model for women in tech campaign in Amsterdam</p>
                <img
                  src={equalsImg}
                  alt="Women tech campaign with Equals"
                ></img>
              </a>
            </div>
          </section>
        </div>
      </article>
    </section>
  );
}

export default PageAboutMe;
