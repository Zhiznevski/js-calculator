export default class Calculator {
  constructor(prevInputElement, currentInputElement) {
    this.prevInputElement = prevInputElement;
    this.currentInputElement = currentInputElement;
    this.currentValue = null;
    this.prevValue = null;
    this.operation = null;
  }

  clearAll() {
    this.currentValue = "";
    this.prevValue = "";
    this.operation = null;
  }

  addValue(value) {
    this.currentValue = value;
    console.log(this.currentValue);
  }

  setOperation(operation) {
    this.operation = operation;
    console.log(this.operation);
  }

  calculate() {}

  updateDisplay() {
    this.currentInputElement.setTextContent(this.currentValue);
  }

  switchSign() {}

  calculatePercent() {}
}
