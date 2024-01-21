export default class Calculator {
  constructor(prevInputElement, currentInputElement) {
    this.prevInputElement = prevInputElement;
    this.currentInputElement = currentInputElement;
    this.currentValue = "";
    this.prevValue = "";
    this.operation = null;
  }

  clearAll() {
    this.currentValue = "";
    this.prevValue = "";
    this.operation = null;
    this.updateInputField();
  }

  addValue(value) {
    if (this.currentValue.includes(".") && value === ".") {
      return;
    }
    // if(this.currentValue.startsWith('0') && value === '0') {
    //     return;
    // }
    this.currentValue = `${this.currentValue}${value}`;
    console.log(typeof this.currentValue, typeof value);
    this.updateInputField();
  }

  setOperation(operation) {
    if (this.currentValue === "") {
      return;
    }
    this.operation = operation;
    this.prevValue = this.currentValue;
    this.currentValue = "";
    this.updateInputField();
  }

  calculate() {
    let result;
    const prev = parseFloat(this.prevValue);
    const current = parseFloat(this.currentValue);
    console.log(prev, current);
    if (Number.isNaN(prev) || Number.isNaN(current)) return;
    if (this.operation === "+") {
      result = prev + current;
    }
    if (this.operation === "-") {
      result = prev - current;
    }
    if (this.operation === "*") {
      result = prev * current;
    }
    if (this.operation === "/") {
      result = prev / current;
    }
    if (this.operation === "%") {
      result = parseFloat((prev / 100) * current);
    }
    this.currentValue = result;
    this.operation = null;
    this.prevValue = "";
    this.updateInputField();
  }

  updateInputField() {
    this.currentInputElement.setTextContent(this.currentValue);
    this.prevInputElement.setTextContent(this.prevValue);
  }

  switchSign() {
    this.currentValue = (this.currentValue * -1).toString();
    this.updateInputField();
  }
}
