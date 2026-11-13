export default class NavigatorComponent {
  #list_button;
  #autoscroll_button;
  
  constructor() {
    // container
    const container = document.createElement("nav");

    // components
    this.#list_button = new Button(container, "◀️");

    this.#autoscroll_button = new Button(container, "⏬");
    this.#autoscroll_button.id = "autoscroll";
  }

  init() {
    // components
    this.#list_button.init();
    this.#autoscroll_button.init();

    // fill
    document.body.append(container);
  }

  // 2. auto-scroll

  bindAutoScroll(handler) {
    this.#autoscroll_button.addEventListener("click", () => {
      handler();
    });
  }
}

class Button {
  #container;
  #element;

  constructor(container, content) {
    this.#container = container;
    this.#element = document.createElement("button");
    this.#element.textContent = content;
  }

  get element() {
    return this.#element;
  }

  set id(id) {
    this.#element.id = id;
  }
  
  init() {
    this.#container.append(this.#element);
  }

  bind(handler) {
    this.#element.addEventListener("click", () => {
      handler();
    });
  }
}
