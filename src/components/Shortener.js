import React, { useState } from "react";
import shortenURL from "../shortenURL";
import ShortenerForm from "./ShortenerForm";
import { loadURLs, storeURLS } from "../loadStoreURLs";

class Shortener extends React.Component {
  constructor(props) {
    super(props);

    const urls = loadURLs();

    this.state = {
      urls,
      showError: false,
    };

    this.handleURLSubmitted = this.handleURLSubmitted.bind(this);
  }

  handleURLSubmitted(urlToShorten) {
    shortenURL(urlToShorten)
      .then((shortenedURL) => {
        this.setState((prevState) => {
          const newURLs = prevState.urls.concat({
            originalLink: urlToShorten,
            shortenedLink: shortenedURL,
          });

          storeURLS(newURLs);

          return {
            urls: newURLs,
            showError: false,
          };
        });
      })
      .catch((err) => {
        console.log(err);

        this.setState({
          showError: true,
        });
      });
  }

  render() {
    const { urls, showError } = this.state;

    return (
      <section className="shortener-container">
        <div className="shortener-form-container">
          <ShortenerForm handleURLSubmitted={this.handleURLSubmitted} />
          <div className="top" />
          <div className="bottom" />
        </div>
        <div className="updates" aria-live="polite">
          {showError && <ShortenURLError />}
          <ShortenedLinks urls={urls} />
        </div>
      </section>
    );
  }
}

function ShortenURLError() {
  return (
    <div className="shorten-url-error">
      <p>
        <strong>Error: </strong> unable to shorten url.
      </p>
    </div>
  );
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
