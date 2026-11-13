export default class NavigatorComponent {
  #container;
  #components = [];
  
  constructor() {
    // container
    this.#container = document.createElement("nav");

    // components
    this.#buttons["list_button"] = new Button()
      .buildContent("◀️");

    this.#buttons["autoscroll_button"] = new Button()
      .buildContent("⏬")
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
  #container;
  #element;

  constructor(container) {
    this.#container = container;
    this.#element = document.createElement("button");
  }

  buildId(id) {
    this.#element.id = id;
    return this;
  }

  buildContent(content) {
    this.#element.textContent = content;
    return this;
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
