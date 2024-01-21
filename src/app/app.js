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
  themeBtn: "themeBtn",
  wrapperLightMode: "wrapper-light-mode",
  bodyLightMode: "body-ligth-mode",
  digitsLightMode: "digits-light-mode",
  themeBtnLightMode: "themeBtn-light-mode",
  funcLightMode: "func-light-mode",
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
    this.themeBtn = new Creator({
      tag: "div",
      classNames: [CLASSES.themeBtn],
      callback: () => this.switchTheme(),
    });
    this.wrapper = new Creator({ tag: "div", classNames: [CLASSES.wrapper] });
    const keyboard = new Creator({
      tag: "div",
      classNames: [CLASSES.keyboard],
    });
    this.functions = new Functions(this.calculator);
    this.digits = new Digits(this.calculator);
    const panel = new Creator({ tag: "div", classNames: [CLASSES.panel] });
    panel
      .getElement()
      .append(this.functions.getHtmlElement(), this.digits.getHtmlElement());
    const operations = new Operations(this.calculator);
    keyboard
      .getElement()
      .append(panel.getElement(), operations.getHtmlElement());
    this.wrapper
      .getElement()
      .append(
        this.themeBtn.getElement(),
        this.inputField.getHtmlElement(),
        keyboard.getElement(),
      );

    document.body.append(this.wrapper.getElement());
  }

  switchTheme() {
    this.wrapper.getElement().classList.toggle(CLASSES.wrapperLightMode);
    document.body.classList.toggle(CLASSES.bodyLightMode);
    this.digits.getHtmlElement().childNodes.forEach((element) => {
      element.classList.toggle(CLASSES.digitsLightMode);
    });
    this.themeBtn.getElement().classList.toggle(CLASSES.themeBtnLightMode);
    this.functions.getHtmlElement().childNodes.forEach((element) => {
      element.classList.toggle(CLASSES.funcLightMode);
    });
  }
}
