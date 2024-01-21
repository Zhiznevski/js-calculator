import Creator from "../../../utils/Creator";
import View from "../../../utils/View";
import "./functions.css";

const CLASSES = {
  grid: "functions-grid",
  function: "function-button",
};

export default class Functions extends View {
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
    const plusMinus = new Creator({
      tag: "div",
      classNames: [CLASSES.function],
      textContent: "±",
    });
    const AC = new Creator({
      tag: "div",
      classNames: [CLASSES.function],
      textContent: "AC",
      callback: () => this.calculator.clearAll(),
    });
    const percent = new Creator({
      tag: "div",
      classNames: [CLASSES.function],
      textContent: "%",
      callback: () => this.calculator.setOperation("%"),
    });
    this.viewElement.addInnerElement(AC);
    this.viewElement.addInnerElement(plusMinus);
    this.viewElement.addInnerElement(percent);
  }
}
