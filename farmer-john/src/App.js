import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './calc';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: "Result:"
    };
    this.calculate = this.calculate.bind(this);
  }

  calculate() {
    var calculateResult = "";
    var numberOfBags = document.getElementById("number_of_bags").value;

    // Check Valid Number
    if (isNaN(numberOfBags) || numberOfBags < 1) {
      calculateResult = "Please enter number of bags"
    }
    else {
      calculateResult = new Calculator(numberOfBags).calculateCost();
    }

    this.setState({ result: calculateResult });

  }

  render() {
    return (
      <div className="App">
        <div>
          <label>
            Number of Bags: <input type="text" id="number_of_bags"></input>
          </label>
        </div>
        <div>
          <input type="button" value="submit" onClick={this.calculate}></input>
        </div>
        <div>
          <div>{this.state.result}</div>
        </div>
      </div>
    );
  }
}

export default App;
