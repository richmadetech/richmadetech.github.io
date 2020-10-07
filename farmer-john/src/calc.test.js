import React from 'react';
import { render } from '@testing-library/react';
import Calculator from './calc';
import App from './App';

test('zero bags returns please enter number of bags', () =>{
  const numberOfBags = 0; 
  var calculator = new Calculator(numberOfBags);
  var totalCost = calculator.calculateCost();

  expect(totalCost).toBe("Please enter number of bags");
});

test('calculates 50p', () => {
    const numberOfBags = 1; 
    var calculator = new Calculator(numberOfBags);
    var totalCost = calculator.calculateCost();
    expect(totalCost).toBe("£0.50");
});
