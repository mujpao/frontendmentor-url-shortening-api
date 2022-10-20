import React from "react";
import darkLogo from "../images/logo.svg";
import introPhoto from "../images/illustration-working.svg";

function Intro() {
  return (
    <section className="intro">
      <header>
        <img className="intro-logo" src={darkLogo} alt="shortly-logo" />
        <div className="hamburger-menu">
          <div />
          <div />
          <div />
        </div>
        {/* <nav>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>
            <ul>
              <li>Login</li>
              <li>Sign Up</li>
            </ul>
          </nav> */}
      </header>
      <div className="image-container">
        <img className="intro-image" src={introPhoto} alt="person working" />
      </div>
      <div className="intro-text">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="get-started" type="button">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Intro;
