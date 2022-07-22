import React from "react";
import Form from "./Form";
import Template from "./Template";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: ""}
  }

  callbackFunction = (formData) => {
    this.setState(formData)
  }

  render(){
    return (
      <div>
        <Form formDataCallback = {this.callbackFunction} />
        <Template 
          name = {this.state.inputName}
          surname = {this.state.inputSurname}
          dept = {this.state.inputDept}
          tel = {this.state.inputTel}
          emailName = {this.state.emailName}
          emailSurname = {this.state.emailSurname}
        />
      </div>
  )}
}

export default App;
