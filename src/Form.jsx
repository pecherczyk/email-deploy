import React from "react"
import Header from './Header'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    
    this.sendData = this.sendData.bind(this)
  }

  sendData(event) {
    this.props.formDataCallback({ [event.target.id]: event.target.value })
  }

  render() {
    return (
      <div className="container">
        <form>
          <Header domain="wpwik.pl" />
          <div className="container">
            <div className="row">
                <label htmlFor="inputName" className="form-label">Imię</label>
                <input type="text" id="inputName" onChange={this.sendData} />
            </div>
            <div className="row">
                <label htmlFor="inputSurname" className="form-label">Nazwisko</label>
                <input type="text" id="inputSurname" onChange={this.sendData}/>
            </div>
            <div className="row">
                <label htmlFor="inputDept" className="form-label">Stanowisko</label>
                <input type="text" id="inputDept" onChange={this.sendData} />
            </div>
            <div className="row">
                <label htmlFor="tel" className="form-label">Telefon</label>
                <input type="text" id="inputTel" onChange={this.sendData}/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Form
