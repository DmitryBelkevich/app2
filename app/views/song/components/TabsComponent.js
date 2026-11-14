export default class TabsComponent {
  #element;
  
  constructor() {
    // container
    this.#element = document.createElement("div");
    this.#element.id = "tabs";
  }

  init() {
    document.body.append(this.#element);
  }
}
