import Creator from "../../../utils/Creator";
import View from "../../../utils/View";
import "./functions.css";

const CLASSES = {
  grid: "functions-grid",
  function: "function-button",
  delete: "delete-button",
};

export default class Functions extends View {
  constructor() {
    const params = {
      tag: "div",
      classNames: [CLASSES.grid],
    };
    super(params);
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
      classNames: [CLASSES.function, CLASSES.delete],
      textContent: "AC",
    });
    const percent = new Creator({
      tag: "div",
      classNames: [CLASSES.function],
      textContent: "%",
    });
    this.viewElement.addInnerElement(AC);
    this.viewElement.addInnerElement(plusMinus);
    this.viewElement.addInnerElement(percent);
  }
}
