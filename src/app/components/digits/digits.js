import { DIGITS } from "../../../data/data";
import Creator from "../../../utils/Creator";
import View from "../../../utils/View";

export default class Digits extends View {
  constructor() {
    const params = {
      tag: "div",
    };
    super(params);
    this.configureView();
  }

  configureView() {
    DIGITS.forEach((digit) => {
      const button = new Creator({ tag: "button", textContent: digit });
      this.viewElement.addInnerElement(button);
    });
  }
}
