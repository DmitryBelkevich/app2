export default class NavigatorComponent {
  #body;

  #list_button;
  #autoscroll_button;
  
  constructor() {
    this.#body = document.body;
  }

  init() {
    // container
    const container = document.createElement("nav");

    // 1. list
    this.#list_button = new Button("◀️");
    this.#list_button.init();

    // 2. auto-scroll
    this.#autoscroll_button = new Button("⏬");
    this.#autoscroll_button.id = "autoscroll";
    this.#autoscroll_button.init();

    // fill
    container.append(this.#list_button.button, this.#autoscroll_button.button);
    this.#body.append(container);
  }

  // 2. auto-scroll

  bindAutoScroll(handler) {
    this.#autoscroll_button.addEventListener("click", () => {
      handler();
    });
  }
}

class Button {
  #button;

  constructor(content) {
    this.#button = document.createElement("button");
    this.#button.textContent = content;
  }

  get button() {
    return this.#button;
  }

  set id(id) {
    this.#button.id = id;
  }
  
  init() {
    
  }

  bind(handler) {
    this.#button.addEventListener("click", () => {
      handler();
    });
  }
}
