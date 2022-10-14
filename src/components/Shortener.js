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
    const { urlToShorten } = this.state;
    console.log(urlToShorten);
    e.preventDefault();
  }

  render() {
    return (
      <section className="shortener-container">
        <form className="shortener" onSubmit={this.handleSubmit}>
          <div className="form-item">
            <label htmlFor="long-url">Shorten a link here...</label>
            <input
              type="text"
              name="long-url"
              id="long-url"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Shorten It!</button>
        </form>
      </section>
    );
  }
}

export default Shortener;
