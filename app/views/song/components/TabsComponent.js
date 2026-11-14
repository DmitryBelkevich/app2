export default class TabsComponent {
  #element;
  #tabs = new Map();
  
  constructor() {
    // container
    this.#element = document.createElement("div");
    this.#element.id = "tabs";
  }

  init() {
    document.body.append(this.#element);
  }
}
