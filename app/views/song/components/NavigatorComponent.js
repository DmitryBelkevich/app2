import Button from './Button.js';

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

  get components() {
    return this.#components;
  }
}
