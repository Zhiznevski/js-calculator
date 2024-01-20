import "../index.css";
import Digits from "./components/digits/digits";
import InputField from "./components/input/input-field";
import Creator from "../utils/Creator";
import Operations from "./components/operations/operations";
import Functions from "./components/functions/functions";

const CLASSES = {
  wrapper: "wrapper",
  keyboard: "keyboard",
  panel: "panel",
};

export default class App {
  constructor() {
    this.createAppView();
    // this.calculator = new Calculator();
  }

  createAppView() {
    const wrapper = new Creator({ tag: "div", classNames: [CLASSES.wrapper] });
    const keyboard = new Creator({
      tag: "div",
      classNames: [CLASSES.keyboard],
    });
    const functions = new Functions();
    const digits = new Digits();
    const panel = new Creator({ tag: "div", classNames: [CLASSES.panel] });
    panel
      .getElement()
      .append(functions.getHtmlElement(), digits.getHtmlElement());
    const operations = new Operations();
    keyboard
      .getElement()
      .append(panel.getElement(), operations.getHtmlElement());
    const inputField = new InputField();
    wrapper
      .getElement()
      .append(inputField.getHtmlElement(), keyboard.getElement());
    document.body.append(wrapper.getElement());
  }
}
