import { DIGITS } from "../../../data/data";
import Creator from "../../../utils/Creator";
import View from "../../../utils/View";
import "./digits.css";

const CLASSES = {
  grid: "digits-grid",
  digit: "digit",
  large: "digit-large",
};

export default class Digits extends View {
  constructor(calculator) {
    const params = {
      tag: "div",
      classNames: [CLASSES.grid],
    };
    super(params);
    this.calculator = calculator;
    this.configureView();
  }

  configureView() {
    DIGITS.forEach((digit) => {
      if (digit === "0") {
        const button = new Creator({
          tag: "div",
          classNames: [CLASSES.digit, CLASSES.large],
          textContent: digit,
          callback: () => this.calculator.addValue(digit),
        });
        this.viewElement.addInnerElement(button);
      } else {
        const button = new Creator({
          tag: "div",
          classNames: [CLASSES.digit],
          textContent: digit,
          callback: () => this.calculator.addValue(digit),
        });
        this.viewElement.addInnerElement(button);
      }
    });
  }
}
