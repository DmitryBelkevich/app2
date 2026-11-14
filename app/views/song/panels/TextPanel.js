export default class TextPanel {
  #element;
  
  constructor() {
    // container
    this.#element = document.createElement("div");
    this.#element.id = "text";
    this.#element.classList.add("panel");

    // components
    for (let i = 0; i < 500; i++) {
      const div = document.createElement("div");
      div.textContent = i;
      this.#element.append(div);
    }
  }

  init() {
    document.body.append(this.#element);
  }
}
