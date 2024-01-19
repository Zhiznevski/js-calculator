import "../index.css";
import Digits from "./components/digits/digits";

export default class App {
  constructor() {
    this.createApp();
  }

  createApp() {
    const digits = new Digits();
    document.body.append(digits.getHtmlElement());
  }
}
