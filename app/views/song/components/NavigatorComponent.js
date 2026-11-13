export default class NavigatorComponent {
  #container;
  #components = [];
  
  constructor() {
    // container
    this.#container = document.createElement("nav");

    // components
    this.#buttons["list_button"] = new Button("◀️");

    this.#buttons["autoscroll_button"] = new Button("⏬")
      .buildId("autoscroll");
  }

  init() {
    // components
    for (const component of this.#components)
      component.init();

    // fill
    document.body.append(this.#container);
  }
}

class Button {
  #element;

  constructor(content) {
    this.#element = document.createElement("button");
    this.#element.textContent = content;
  }

  buildId(id) {
    this.#element.id = id;
    return this;
  }

  set content(content) {
    this.#element.textContent = content;
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
