import React from 'react';
import { render } from '@testing-library/react';
import Calculator from './calc';
import App from './App';

test('calculates zero', () => {
  const numberOfBags = 0; 
  var calculator = new Calculator(numberOfBags);
  var totalCost = calculator.calculateCost();
  expect(totalCost).toBe("£0.00");
});

test('calculates 50p', () => {
    const numberOfBags = 1; 
    var calculator = new Calculator(numberOfBags);
    var totalCost = calculator.calculateCost();
    expect(totalCost).toBe("£0.50");
});

test('calcuates 50p from input', () => {
    const numberOfBags = document.getElementById("number_of_bags").value; 
    var calculator = new Calculator(numberOfBags);
    var totalCost = calculator.calculateCost();
    expect(totalCost).toBe("£0.50");
})