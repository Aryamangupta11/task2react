import React, { Component } from 'react';
import './App.css';
import './Calculator.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: '0',
    };
  }

  handleButtonClick = (value) => {
    const { display } = this.state;

    if (display === '0' || display === 'Error') {
      this.setState({ display: value });
    } else {
      this.setState({ display: display + value });
    }
  };

  handleClear = () => {
    this.setState({ display: '0' });
  };

  handleCalculate = () => {
    try {
      const result = eval(this.state.display);
      this.setState({ display: result });
    } catch (error) {
      this.setState({ display: 'Error' });
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.display}</div>
        <div className="buttons">
          <div className="row">
            <button onClick={() => this.handleButtonClick('1')}>1</button>
            <button onClick={() => this.handleButtonClick('2')}>2</button>
            <button onClick={() => this.handleButtonClick('3')}>3</button>
            <button onClick={() => this.handleButtonClick('+')}>+</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleButtonClick('4')}>4</button>
            <button onClick={() => this.handleButtonClick('5')}>5</button>
            <button onClick={() => this.handleButtonClick('6')}>6</button>
            <button onClick={() => this.handleButtonClick('-')}>-</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleButtonClick('7')}>7</button>
            <button onClick={() => this.handleButtonClick('8')}>8</button>
            <button onClick={() => this.handleButtonClick('9')}>9</button>
            <button onClick={() => this.handleButtonClick('*')}>*</button>
          </div>
          <div className="row4">
            <button onClick={this.handleClear}>C</button>
            <button onClick={() => this.handleButtonClick('0')}>0</button>
            <button onClick={this.handleCalculate}>=</button>
            <button onClick={() => this.handleButtonClick('/')}>/</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;