export default class Creator {
  constructor(params) {
    this.element = null;
    this.createElement(params);
  }

  getElement() {
    return this.element;
  }

  addInnerElement(element) {
    if (element instanceof Creator) {
      this.element.append(element.getElement());
    } else {
      this.element.append(element);
    }
  }

  createElement(params) {
    this.element = document.createElement(params.tag);
    this.setCssClasses(params.cssClasses);
    this.setTextContent(params.textContent);
    this.setCallback(params.callback);
  }

  setTextContent(textContent = "") {
    this.element.textContent = textContent;
  }

  setCallback(callback) {
    this.element.addEventListener("click", (e) => callback(e));
  }

  setCssClasses(classes = []) {
    classes.map((el) => this.element.classList.add(el));
  }
}
