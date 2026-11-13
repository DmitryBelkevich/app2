export default class NavigatorComponent {
  #container;
  
  #list_button;
  #autoscroll_button;
  
  constructor() {
    // container
    this.#container = document.createElement("nav");

    // components
    this.#list_button = new Button("◀️");

    this.#autoscroll_button = new Button("⏬");
    this.#autoscroll_button.id = "autoscroll";
  }

  init() {
    // components
    this.#list_button.init();
    this.#autoscroll_button.init();

    // fill
    this.#container.append(this.#list_button.button, this.#autoscroll_button.button);
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
  #button;
  #content;

  constructor(content) {
    this.#content = content;
  }

  get button() {
    return this.#button;
  }

  set id(id) {
    this.#button.id = id;
  }
  
  init() {
    this.#button = document.createElement("button");
    this.#button.textContent = this.#content;
  }

  bind(handler) {
    this.#button.addEventListener("click", () => {
      handler();
    });
  }
}
