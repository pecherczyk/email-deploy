import React from "react"
import Header from './Header'
import validator from "./validator"
import "./Form.css"

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    
    this.sendData = this.sendData.bind(this)
    this.logger = this.logger.bind(this)

  }

  sendData(event) {

    switch (event.target.id) {
      case 'inputName':
        let isValidName = validator.validName(event.target.value)
        if (isValidName) {
          this.setState({inputNameClass: 'correct'})
          this.props.formDataCallback({ [event.target.id]: event.target.value })
        } else {
          this.setState({inputNameClass: 'wrong'})
          this.props.formDataCallback({ [event.target.id]: '' })
        }
        break;

      case 'inputSurname':
        console.log('działa surname')
        break;

      case 'inputDept':
        console.log('działa dept')
        break;

      case 'inputTel':
        console.log('działa tel')
        break;

      default:
        break;
    }
  }

  logger(event) {

    let isValid = validator.validName(event.target.value)

    if (isValid) {
      this.setState({inputNameClass: 'correct'})
    } else {
      this.setState({inputNameClass: 'wrong'})
    }
  }

  render() {
    return (
      <div className="container">
        <form>
          <Header domain="wpwik.pl" />
          <div className="container">
            <div className="row">
                <label htmlFor="inputName" className="form-label">Imię</label>
                <input type="text" id="inputName" className={this.state.inputNameClass} onChange={this.sendData} maxLength="15"/>
            </div>
            <div className="row">
                <label htmlFor="inputSurname" className="form-label">Nazwisko</label>
                <input type="text" id="inputSurname" onChange={this.sendData} maxLength="28"/>
            </div>
            <div className="row">
                <label htmlFor="inputDept" className="form-label">Stanowisko</label>
                <input type="text" id="inputDept" onChange={this.sendData} maxLength="20" />
            </div>
            <div className="row">
                <label htmlFor="tel" className="form-label">Telefon</label>
                <input type="text" id="inputTel" onChange={this.sendData} maxLength="30" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Form
