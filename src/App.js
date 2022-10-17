import React from "react";
import "./style.css";
import darkLogo from "./images/logo.svg";
import lightLogo from "./images/logo-light.svg";
import introPhoto from "./images/illustration-working.svg";
import Shortener from "./components/Shortener";

function App() {
  return (
    <div className="App">
      <Intro />
      <Shortener />
      <Info />
      <section className="call-to-action">
        <h2>Boost your links today</h2>
        <button className="get-started" type="button">
          Get Started
        </button>
      </section>
      <Footer />
    </div>
  );
}

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

function Info() {
  return (
    <section className="info">
      <div className="overview">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="info-items">
        <div className="info-item">
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="info-item">
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="info-item">
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <img className="footer-logo" src={lightLogo} alt="shortly-logo" />
      <div className="footer-item">
        <h3>Features</h3>
        <ul>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </div>
      <div className="footer-item">
        <h3>Resources</h3>
        <ul>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
      </div>
      <div className="footer-item">
        <h3>Company</h3>
        <ul>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* TODO add attribution section */}
    </footer>
  );
}

export default App;
