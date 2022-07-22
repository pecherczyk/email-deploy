import React from "react";
import Header from "./Header";
// import validator from "./validator";
import validator2 from "./validator2";
import "./Form.css";
import removeDiacritics from "./emailHelper.js";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: false,
      app: 0
    };

    // this.sendData = this.sendData.bind(this);
    this.processData = this.processData.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

  componentDidUpdate() {
    // if(
    //   this.state.inputName__ready &&
    //   this.state.inputSurname__ready &&
    //   this.state.inputDept__ready &&
    //   this.state.inputTel__ready &&
    //   this.state.app === 0
    //   ) {
      
    //   const emailName = removeDiacritics(this.state.inputName);
    //   const emailSurname = removeDiacritics(this.state.inputSurname);

    //   this.setState({app: 1})
    //   this.props.formDataCallback(
    //     {
    //       inputName: this.state.inputName,
    //       inputSurname: this.state.inputSurname,
    //       inputDept: this.state.inputDept,
    //       inputTel: this.state.inputTel,
    //       emailName: emailName,
    //       emailSurname: emailSurname
    //     }
    //   )
    // }
    // if (
    //   this.state.formFilled === false &&
    //   this.state.inputNameClass === "correct" &&
    //   this.state.inputSurnameClass === "correct" &&
    //   this.state.inputDeptClass === "correct" &&
    //   this.state.inputTelClass === "correct"
    // ) {
    //   this.setState({ formFilled: true });
    // } else if (
    //   this.state.formFilled === true &&
    //   (this.state.inputNameClass === "wrong" ||
    //     this.state.inputSurnameClass === "wrong" ||
    //     this.state.inputDeptClass === "wrong" ||
    //     this.state.inputTelClass === "wrong")
    // ) {
    //   this.setState({ formFilled: false });
    //   this.setState({ email: false });
    // }
    // if (this.state.name && this.state.surname && this.state.email === false) {
    //   const emailName = removeDiacritics(this.state.name);
    //   const emailSurname = removeDiacritics(this.state.surname);
    //   this.setState({ email: emailName + "." + emailSurname + "@wpwik.pl" });
    // }
  }
  
  processData(event) {

    let ok // true or false 

    try {
      let isOk = validator2(event.target.id, event.target.value)
      ok = isOk
    } catch (err) {
      console.log(err.message)
    }
    if (ok) {
      this.setState({[event.target.id]: event.target.value})
      event.target.className = 'correct'
      this.setState({[event.target.id + '__ready']: 1})
    } else {
      this.setState({[event.target.id]: ''})
      event.target.className = 'wrong'
      this.setState({[event.target.id + '__ready']: 0})
    }
  }

  sendForm(event) {
    event.preventDefault();
    if(
      this.state.inputName__ready &&
      this.state.inputSurname__ready &&
      this.state.inputDept__ready &&
      this.state.inputTel__ready &&
      this.state.app === 0
      ) {
      
      const emailName = removeDiacritics(this.state.inputName);
      const emailSurname = removeDiacritics(this.state.inputSurname);

      this.setState({app: 1})
      this.props.formDataCallback(
        {
          inputName: this.state.inputName,
          inputSurname: this.state.inputSurname,
          inputDept: this.state.inputDept,
          inputTel: this.state.inputTel,
          emailName: emailName,
          emailSurname: emailSurname
        }
      )
    } else {
      window.alert("NU")
    }
  }

  // sendData(event) {
  //   switch (event.target.id) {
  //     case "inputName":
  //       let isValidName = validator.validName(event.target.value);

  //       if (isValidName) {
  //         this.setState({ inputNameClass: "correct" });
  //         this.setState({ name: event.target.value });
  //         this.props.formDataCallback({
  //           [event.target.id]: event.target.value,
  //         });
  //       } else {
  //         this.setState({ inputNameClass: "wrong" });
  //         this.props.formDataCallback({ [event.target.id]: "" });
  //       }
  //       break;

  //     case "inputSurname":
  //       let isValidSurname = validator.validSurname(event.target.value);

  //       if (isValidSurname) {
  //         this.setState({ inputSurnameClass: "correct" });
  //         this.setState({ surname: event.target.value });
  //         this.props.formDataCallback({
  //           [event.target.id]: event.target.value,
  //         });
  //       } else {
  //         this.setState({ inputSurnameClass: "wrong" });
  //         this.props.formDataCallback({ [event.target.id]: "" });
  //       }
  //       break;

  //     case "inputDept":
  //       let isValidDept = validator.validDept(event.target.value);

  //       if (isValidDept) {
  //         this.setState({ inputDeptClass: "correct" });
  //         this.setState({ dept: event.target.value });
  //         this.props.formDataCallback({
  //           [event.target.id]: event.target.value,
  //         });
  //       } else {
  //         this.setState({ inputDeptClass: "wrong" });
  //         this.props.formDataCallback({ [event.target.id]: "" });
  //       }

  //       break;

  //     case "inputTel":
  //       let isValidTel = validator.validTel(event.target.value);
  //       console.log(isValidTel);
  //       if (isValidTel) {
  //         this.setState({ inputTelClass: "correct" });
  //         this.setState({ tel: event.target.value });
  //         this.props.formDataCallback({
  //           [event.target.id]: event.target.value,
  //         });
  //       } else {
  //         this.setState({ inputTelClass: "wrong" });
  //         this.props.formDataCallback({ [event.target.id]: "" });
  //       }

  //       break;

  //     default:
  //       break;
  //   }
  // }

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
                onChange={this.processData}
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
                onChange={this.processData}
                maxLength="28"
              />
            </div>
            <div className="row">
              <label htmlFor="inputDept" className="form-label">
                Stanowisko
              </label>
              <input
                type="text"
                id="inputDept"
                onChange={this.processData}
                maxLength="30"
              />
            </div>
            <div className="row">
              <label htmlFor="tel" className="form-label">
                Telefon
              </label>
              <input
                type="text"
                id="inputTel"
                onChange={this.processData}
                maxLength="30"
              />
            </div>
            <div className="row">
              <input
                type="submit"
                id="submit"
                onClick={this.sendForm}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
