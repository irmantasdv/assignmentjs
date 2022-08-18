/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(firstNumber, secondNumber) {
  this.firstNumber = firstNumber;
  this.secondNumber = secondNumber;

  this.checkIfNumber = function() {
    if (typeof(this.firstNumber) !== 'number' || typeof(this.secondNumber) !== 'number') {
      throw new Error('invalid data, not a number.');
    }
  }

  this.checkIfZero = function () {
    if (this.firstNumber === 0 || this.secondNumber === 0) {
      throw new Error('division: invalid data, can\'t divide by zero.');
    }
  }

  this.sum = function(){
    this.checkIfNumber();
    this.checkIfZero();
    return this.firstNumber + this.secondNumber;
  };

  this.subtraction = function() {
    this.checkIfNumber();
    return this.firstNumber - this.secondNumber;
  }

  this.multiplication = function() {
    this.checkIfNumber();
    return this.firstNumber * this.secondNumber;
  }

  this.division = function() {
    this.checkIfNumber();
    this.checkIfZero();
    return this.firstNumber / this.secondNumber;
  }
}
var myInstance = new Calculator(788977,2343);


console.log('Sum result: ',myInstance.sum());
console.log('Subtraction result: ',myInstance.subtraction());
console.log('Multiplication result: ',myInstance.multiplication());
console.log('Division result: ',myInstance.division());