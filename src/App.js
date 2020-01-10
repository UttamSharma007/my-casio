import React, { Component } from 'react';
import './App.css';
import ResultComponent from './Component/ResultComponent';
import KeypadComponent from './Component/KeypadComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result : ""
    }
  }

  onClick = button => {
    if(button === "=") {
      this.calculate();
    }
    else if(button === "C") {
      this.reset();
    }
    else if(button === "CE") {
      this.backspace();
    }
    else {
      if(this.duplicate() !== button ) {
        this.setState({
          result : this.state.result + button
        })
      }
      else {
        this.setState({
          result : this.state.result + ''
        })
      }
    }
  }

  duplicate = () => {
    if( this.state.result.charAt(this.state.result.length-1).match(/^[0-9]+$/)) {
      return "";
    }
    else {
      return this.state.result.charAt(this.state.result.length-1);
    }
  }

  calculate = () => {
    try {
        this.setState({
          result : (eval(this.state.result) || "") + ''
        })
    }
    catch(e) {
        this.setState({
          result : "error"
        })
    }
  }

  reset = () => {
        this.setState({
          result : ""
        })
  }

  backspace = () => {
    this.setState({
      result : this.state.result.slice(0, -1)
    })
  }

  render() {
    return (
      <div>
        <ResultComponent result={this.state.result} />
        <KeypadComponent onClick={this.onClick}/>
      </div>
    );
  }
}

export default App;