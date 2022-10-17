import React from "react";

class ShortenerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      urlToShorten: "",
      valid: false,
      touched: false,
    };

    this.inputRef = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      urlToShorten: e.target.value,
      valid: this.inputRef.current.validity.valid,
      touched: true,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      touched: true,
    });

    const { urlToShorten, valid } = this.state;
    if (!valid) {
      return;
    }

    const { handleURLSubmitted } = this.props;

    handleURLSubmitted(urlToShorten);
  }

  render() {
    const { urlToShorten, valid, touched } = this.state;

    const isEmpty = urlToShorten === "";

    let labelClasses = "";
    if (!isEmpty) {
      labelClasses += "visually-hidden";
    }

    if (touched && !valid) {
      labelClasses += " invalid-input";
    }

    return (
      <form className="shortener" onSubmit={this.handleSubmit} noValidate>
        <div className="form-item">
          <label htmlFor="long-url" className={labelClasses}>
            Shorten a link here...
          </label>
          <input
            ref={this.inputRef}
            type="url"
            name="long-url"
            id="long-url"
            onChange={this.handleChange}
            value={urlToShorten}
            className={touched ? "touched" : ""}
            required
          />
          {touched && !valid && (
            <span className="error">Please enter something valid...</span>
          )}
        </div>
        <button type="submit">Shorten It!</button>
      </form>
    );
  }
}

export default ShortenerForm;
