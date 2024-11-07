import React from "react";
import "./PageAboutMe.module.css";
import PictureProfile from "@/assets/self-picture.jpg";

function PageAboutMe() {
  return (
    <article className="full-page about-me">
      <section className="left img-container">
        {/* <div className="img-container"> */}
        <img src={PictureProfile} alt="Stéphanie Alix picture Portfolio Web" />
        {/* </div> */}
      </section>
      <section className="right">
        <div>
          <h1 class="top">A bit more...</h1>
          <div>
            <p>
              I&apos;m 29 year old, I <span>studied</span> computer science in
              France and I always liked web. I moved to <span>Amsterdam</span> 7
              years ago and I&apos;ve worked as a <span>web developer</span>
              since. I like coding projects on the side to
              <span>continue learning</span>, to make nice apps to share
              comething I care about or that can be useful for me or my friends.{" "}
            </p>
            <p>
              On my spare time I love <span>reading</span>. It can be any type
              of novels, adventures, psychological or self-development books. I
              also enjoy <span>sports</span> very much. It can be going to the
              gym, swimming, running or any team sports with friends. I also
              found recently a new passion for <span>crochet</span>! Besides
              that I also like to <span>travel</span>, learn new languages and
              discover different cultures.
            </p>
          </div>
          <h1 class="bottom">
            ...about <span>me</span>
          </h1>
        </div>
      </section>
    </article>
  );
}

export default PageAboutMe;
