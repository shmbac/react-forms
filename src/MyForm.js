import React, { Component } from "react";

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.myInput = React.createRef();
    
  }

  handleClick() {
      //this.myInput.current.style.background = 'red'; BAD usage of reacat DONT USE
              //we will use it only when need to read
      console.log(this.myInput.current.value)
  }

  render() {
    return (
      <div>
        Name: <input ref={this.myInput} />
        <button onClick={this.handleClick.bind(this)}>Show ref</button>
      </div>
    );
  }
}

export default MyForm;
