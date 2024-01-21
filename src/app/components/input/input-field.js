import Creator from "../../../utils/Creator";
import View from "../../../utils/View";
import "./input-field.css";

const CLASSES = {
  input: "input-field",
  prevValue: "prev-value",
  currentValue: "current-value",
};

export default class InputField extends View {
  constructor() {
    const params = {
      tag: "div",
      classNames: [CLASSES.input],
    };
    super(params);
    this.configureView();
  }

  configureView() {
    this.prevValue = new Creator({
      tag: "div",
      classNames: [CLASSES.prevValue],
    });
    this.currentValue = new Creator({
      tag: "div",
      classNames: [CLASSES.currentValue],
    });
    this.viewElement
      .getElement()
      .append(this.prevValue.getElement(), this.currentValue.getElement());
  }
}
