import Creator from "./Creator";

export default class View {
  constructor(params = { tag: "div", classNames: [] }) {
    this.viewElement = this.createView(params);
  }

  createView(params) {
    const viewParams = {
      tag: params.tag,
      classNames: params.classNames,
      textContent: "",
      callback: null,
    };
    this.viewElement = new Creator(viewParams);

    return this.viewElement;
  }

  getHtmlElement() {
    return this.viewElement.getElement();
  }
}
