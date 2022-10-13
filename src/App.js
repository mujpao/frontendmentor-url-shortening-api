import React from "react";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Intro />
      <Shortener />
      <Info />
      <div className="callToAction">
        <h2>Boost your links today</h2>
        <button type="button">Get Started</button>
      </div>
      <Footer />
    </div>
  );
}

function Intro() {
  return (
    <div className="intro">
      <header>
        <h1>Shortly</h1>
        <nav>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <ul>
            <li>Login</li>
            <li>Sign Up</li>
          </ul>
        </nav>
      </header>
      <div>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button type="button">Get Started</button>
      </div>
    </div>
  );
}

function Shortener() {
  return (
    <div className="shortener">
      <div className="form-item">
        <label htmlFor="long-url">Shorten a link here...</label>
        <input type="text" name="long-url" id="long-url" />
      </div>
      <button type="button">Shorten It!</button>
    </div>
  );
}

function Info() {
  return (
    <div>
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      <div className="info-item">
        <h3>Brand Recognition</h3>
        <p>
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </p>
      </div>

      <div className="info-item">
        <h3>Detailed Records</h3>
        <p>
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
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
  );
}

function Footer() {
  return (
    <footer>
      <h2>Shortly</h2>
      <h3>Features</h3>
      <ul>
        <li>Link Shortening</li>
        <li>Branded Links</li>
        <li>Analytics</li>
      </ul>
      <h3>Resources</h3>
      <ul>
        <li>Blog</li>
        <li>Developers</li>
        <li>Support</li>
      </ul>
      <h3>Company</h3>
      <ul>
        <li>About</li>
        <li>Our Team</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>

      {/* TODO add attribution section */}
    </footer>
  );
}

export default App;
