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
    const prevValue = new Creator({
      tag: "div",
      classNames: [CLASSES.prevValue],
      textContent: "123",
    });
    const currentValue = new Creator({
      tag: "div",
      classNames: [CLASSES.currentValue],
      textContent: "123",
    });
    this.viewElement
      .getElement()
      .append(prevValue.getElement(), currentValue.getElement());
  }
}
