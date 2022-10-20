import React from "react";
import lightLogo from "../images/logo-light.svg";
import facebookIcon from "../images/icon-facebook.svg";
import twitterIcon from "../images/icon-twitter.svg";
import pinterestIcon from "../images/icon-pinterest.svg";
import instagramIcon from "../images/icon-instagram.svg";

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

      <div className="social-icons">
        <div className="social-icon">
          <img src={facebookIcon} alt="facebook" />
        </div>
        <div className="social-icon">
          <img src={twitterIcon} alt="twitter" />
        </div>
        <div className="social-icon">
          <img src={pinterestIcon} alt="pinterest" />
        </div>
        <div className="social-icon">
          <img src={instagramIcon} alt="instagram" />
        </div>
      </div>

      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/mujpao">mujpao</a>.
      </div>
    </footer>
  );
}

export default Footer;
