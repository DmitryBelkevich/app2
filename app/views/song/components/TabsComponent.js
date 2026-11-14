import Button from './Button.js';

export default class TabsComponent {
  #element;
  #components = new Map();// tabs
  
  constructor() {
    // container
    this.#element = document.createElement("div");
    this.#element.id = "tabs";

    this.#components.set("tab_text", new Button().content("📝 Text & Chords"));
    this.#components.set("tab_score", new Button().content("🎵 Scores"));
    this.#components.set("tab_playback", new Button().content("🎧 Playbacks"));
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
