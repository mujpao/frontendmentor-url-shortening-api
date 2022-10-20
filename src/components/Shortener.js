import React from "react";
import shortenURL from "../shortenURL";
import ShortenerForm from "./ShortenerForm";

class Shortener extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      urls: [
        {
          originalLink: "https://www.foo.com",
          shortenedLink: "https://www.google.com",
        },
        {
          originalLink: "https://www.foo2.com",
          shortenedLink: "https://www.google.com",
        },
      ],
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

  return (
    <div className="shortened-link">
      <p className="original">{originalLink}</p>
      <hr />
      <p className="shortened">{shortenedLink}</p>
      <button type="button" className="btn">
        Copy
      </button>
    </div>
  );
}

export default Shortener;
