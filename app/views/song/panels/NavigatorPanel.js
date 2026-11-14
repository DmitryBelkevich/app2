import Button from '../components/Button.js';

export default class NavigatorPanel {
  #element;
  #components = new Map();
  
  constructor() {
    this.#element = document.createElement("nav");
    this.#element.classList.add("panel");
    
    this.#components.set("list_button", new Button("◀️"));
    this.#components.set("autoscroll_button", new Button("⏬").id("autoscroll"));
  }

  init() {
    for (const component of this.#components.values())
      this.#element.append(component.element);
    
    document.body.append(this.#element);
  }

  get components() {
    return this.#components;
  }
}
