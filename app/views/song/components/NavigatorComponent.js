export default class NavigatorComponent {
  #container;
  #components = new Map();
  
  constructor() {
    // container
    this.#container = document.createElement("nav");

    // components
    this.#components.set("list_button", new Button().content("◀️"));

    this.#components.set("autoscroll_button", new Button().content("⏬").id("autoscroll"));
  }

  init() {
    // components
    for (const component of this.#components.values())
      this.#container.append(component);

    // fill
    document.body.append(this.#container);
  }
}

class Button {
  #element;

  constructor() {
    this.#element = document.createElement("button");
  }

  id(id) {
    this.#element.id = id;
    return this;
  }

  get element() {
    return this.#element;
  }

  content(content) {
    this.#element.textContent = content;
    return this;
  }
  
  init() {
    
  }

  bind(handler) {
    this.#element.addEventListener("click", () => {
      handler();
    });
  }
}
