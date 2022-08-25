import React from "react";
import Header from "./Header";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false
    };
  }

  render() {
    return (
      <div className="container">
        <form>
          <Header domain="wpwik.pl" />
          <div className="container">
            <div className="row">
              <label htmlFor="inputName" className="form-label">
                Imię
              </label>
              <input
                type="text"
                id="inputName"
                onChange={this.props.processData}
                maxLength="15"
              />
            </div>
            <div className="row">
              <label htmlFor="inputSurname" className="form-label">
                Nazwisko
              </label>
              <input
                type="text"
                id="inputSurname"
                onChange={this.props.processData}
                maxLength="28"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
