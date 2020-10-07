class Calculator {
    constructor(numOfBags) {
        this.numOfBags = numOfBags;
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