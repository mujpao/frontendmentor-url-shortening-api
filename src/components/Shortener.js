import React, { useState } from "react";
import shortenURL from "../shortenURL";
import ShortenerForm from "./ShortenerForm";

class Shortener extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      urls: [],
    };

    this.handleURLSubmitted = this.handleURLSubmitted.bind(this);
  }

  handleURLSubmitted(urlToShorten) {
    shortenURL(urlToShorten).then((shortenedURL) => {
      this.setState((prevState) => ({
        urls: prevState.urls.concat({
          originalLink: urlToShorten,
          shortenedLink: shortenedURL,
        }),
      }));
    });
  }

  render() {
    const { urls } = this.state;

    return (
      <section className="shortener-container">
        <div className="shortener-form-container">
          <ShortenerForm handleURLSubmitted={this.handleURLSubmitted} />
          <div className="top" />
          <div className="bottom" />
        </div>
        <ShortenedLinks urls={urls} />
      </section>
    );
  }
}

function ShortenedLinks(props) {
  const { urls } = props;

  const shortenedLinks = urls.map((link, index) => (
    <ShortenedLink
      key={index}
      originalLink={link.originalLink}
      shortenedLink={link.shortenedLink}
    />
  ));

  return <div className="shortened-links">{shortenedLinks}</div>;
}

function ShortenedLink(props) {
  const { originalLink, shortenedLink } = props;

  const [showCopied, setShowCopied] = useState(false);

  function copyLink() {
    navigator.clipboard.writeText(shortenedLink).then(() => {
      setShowCopied(true);
      setTimeout(() => {
        setShowCopied(false);
      }, 2000);
    });
  }

  return (
    <div className="shortened-link">
      <p className="original">{originalLink}</p>
      <hr />
      <a href={shortenedLink} className="shortened">
        {shortenedLink}
      </a>
      <button
        type="button"
        className={`btn copy-btn ${showCopied ? "copied" : ""}`}
        onClick={copyLink}
      >
        {showCopied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

export default Shortener;
