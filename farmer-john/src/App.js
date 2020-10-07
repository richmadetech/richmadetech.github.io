import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <label>
          Number of Bags: <input type="text" name="number_of_bags"></input>
        </label>
      </div>
      <div>
        <input type="submit" value="submit" onClick="calculate()"></input>
      </div>
      <div>
        <label id="total_cost"></label>
      </div>
    </div>
  );
}

export default App;
