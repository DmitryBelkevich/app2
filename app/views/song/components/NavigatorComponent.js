export default class NavigatorComponent {
  #container;
  #components = new Map();
  
  constructor() {
    this.#container = document.createElement("nav");
    
    this.#components.set("list_button", new Button().content("◀️"));
    this.#components.set("autoscroll_button", new Button().content("⏬").id("autoscroll"));
  }

  init() {
    for (const component of this.#components.values())
      this.#container.append(component.element);
    
    document.body.append(this.#container);
  }
}

class Button {
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
  
  init() {
    
  }

  bind(handler) {
    this.#element.addEventListener("click", () => {
      handler();
    });
  }
}
