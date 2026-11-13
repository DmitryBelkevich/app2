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
    this.#autoscroll_button = document.createElement("button");
    this.#autoscroll_button.id = "autoscroll";
    this.#autoscroll_button.textContent = "⏬";

    // fill
    container.append(this.#list_button.#button, this.#autoscroll_button);
    this.#body.append(container);
  }

  // 1. list

  bindList(handler) {
    this.#list_button.addEventListener("click", () => {
      handler();
    });
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

  #id;
  #content;

  constructor(content) {
    this.#content = content;
  }

  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id;
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
