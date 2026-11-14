export default class TabsComponent {
  #element;
  #components = new Map();// tabs
  
  constructor() {
    // container
    this.#element = document.createElement("div");
    this.#element.id = "tabs";
  }

  init() {
    document.body.append(this.#element);
  }

  get components() {
    return this.#components;
  }
}
