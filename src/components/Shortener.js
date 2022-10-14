import React from "react";

class Shortener extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      urlToShorten: "",
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
  }

  render() {
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
        <ShortenedLinks />
      </section>
    );
  }
}

function ShortenedLinks() {
  return (
    <div className="shortened-links">
      <div className="shortened-link">
        <p className="original">https://www.foo.com</p>
        <hr />
        <p className="shortened">https://www.google.com</p>
        <button type="button">Copy</button>
      </div>
      <div className="shortened-link">
        <p className="original">https://www.foo2.com</p>
        <hr />
        <p className="shortened">https://www.google.com</p>
        <button type="button">Copy</button>
      </div>
    </div>
  );
}

export default Shortener;
