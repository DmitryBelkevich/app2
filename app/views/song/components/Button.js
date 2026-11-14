export default class Button {
  #element;

  constructor() {
    this.#element = document.createElement("button");
  }

  get element() {
    return this.#element;
  }

  id(id) {
    this.#element.id = id;
    return this;
  }

  content(content) {
    this.#element.textContent = content;
    return this;
  }

  addClass(clazz) {
    this.#element.classList.add(clazz);
    return this;
  }
  
  init() {
    
  }

  click(handler) {
    this.#element.addEventListener("click", () => {
      handler();
    });
  }
}
