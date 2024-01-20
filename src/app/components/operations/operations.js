import { OPERATIONS } from "../../../data/data";
import Creator from "../../../utils/Creator";
import View from "../../../utils/View";
import "./operations.css";

const CLASSES = {
  grid: "operation-grid",
  operation: "operation",
};

export default class Operations extends View {
  constructor() {
    const params = {
      tag: "div",
      classNames: [CLASSES.grid],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    OPERATIONS.forEach((el) => {
      const button = new Creator({
        tag: "div",
        classNames: [CLASSES.operation],
        textContent: el,
      });
      this.viewElement.addInnerElement(button);
    });
    const equal = new Creator({
      tag: "div",
      classNames: [CLASSES.operation],
      textContent: "=",
    });
    this.viewElement.addInnerElement(equal);
  }
}
