import "../index.css";
import Digits from "./components/digits/digits";
import InputField from "./components/input/input-field";
import Creator from "../utils/Creator";
import Operations from "./components/operations/operations";
import Functions from "./components/functions/functions";
import Calculator from "./calculator";

const CLASSES = {
  wrapper: "wrapper",
  keyboard: "keyboard",
  panel: "panel",
};

export default class App {
  constructor() {
    this.inputField = new InputField();
    this.calculator = new Calculator(
      this.inputField.prevValue,
      this.inputField.currentValue,
    );
    this.createAppView();
  }

  createAppView() {
    const wrapper = new Creator({ tag: "div", classNames: [CLASSES.wrapper] });
    const keyboard = new Creator({
      tag: "div",
      classNames: [CLASSES.keyboard],
    });
    const functions = new Functions(this.calculator);
    const digits = new Digits(this.calculator);
    const panel = new Creator({ tag: "div", classNames: [CLASSES.panel] });
    panel
      .getElement()
      .append(functions.getHtmlElement(), digits.getHtmlElement());
    const operations = new Operations(this.calculator);
    keyboard
      .getElement()
      .append(panel.getElement(), operations.getHtmlElement());
    wrapper
      .getElement()
      .append(this.inputField.getHtmlElement(), keyboard.getElement());
    document.body.append(wrapper.getElement());
  }
}
