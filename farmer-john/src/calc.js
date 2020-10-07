import { isValidElement } from "react";

class Calculator {
    constructor(numOfBags) {
        this.numOfBags = numOfBags;
    }

    isValid() {
        return  (typeof (this.numOfBags) === 'number' && (this.numOfBags > 0));
    } 

    calculateCost() {
            var formatter = new Intl.NumberFormat('en-GB', {
                style: 'currency',
                currency: 'GBP',
                minimumFractionDigits: 2,
            })
            var totalCost = 0;
            totalCost = this.numOfBags * .50;
            return formatter.format(totalCost);
    }
}

export default Calculator;