import React from "react";
import shortenURL from "../shortenURL";

class Shortener extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      urlToShorten: "",
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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      urlToShorten: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { urlToShorten } = this.state;
    console.log(urlToShorten);

    shortenURL(urlToShorten).then((shortenedURL) => {
      console.log(shortenedURL);
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
        <form className="shortener" onSubmit={this.handleSubmit}>
          <div className="form-item">
            <label htmlFor="long-url">Shorten a link here...</label>
            <input
              type="url"
              name="long-url"
              id="long-url"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Shorten It!</button>
        </form>
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
      <button type="button">Copy</button>
    </div>
  );
}

export default Shortener;
