import React from "react";
import darkLogo from "../images/logo.svg";
import introPhoto from "../images/illustration-working.svg";

class Intro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showNavigation: false,
    };

    this.handleClickMenu = this.handleClickMenu.bind(this);
  }

  handleClickMenu() {
    this.setState((prevState) => ({
      showNavigation: !prevState.showNavigation,
    }));
  }

  render() {
    const { showNavigation } = this.state;

    return (
      <section className="intro">
        <header>
          <img className="intro-logo" src={darkLogo} alt="shortly-logo" />
          <button
            type="button"
            className="hamburger-menu"
            onClick={this.handleClickMenu}
          >
            <div />
            <div />
            <div />
          </button>
          {showNavigation && <Navigation />}
        </header>
        <div className="intro-content">
          <div className="image-container">
            <img
              className="intro-image"
              src={introPhoto}
              alt="person working"
            />
          </div>
          <div className="intro-text">
            <h1>More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="btn get-started" type="button">
              Get Started
            </button>
          </div>
        </div>
      </section>
    );
  }
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <hr />
      <ul>
        <li>Login</li>
        <li className="sign-up">Sign Up</li>
      </ul>
    </nav>
  );
}

export default Intro;
