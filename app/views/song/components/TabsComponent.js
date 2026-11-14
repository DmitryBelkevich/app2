import Button from './Button.js';

export default class TabsComponent {
  #element;
  #components = new Map();// tabs
  
  constructor() {
    // container
    this.#element = document.createElement("div");
    this.#element.id = "tabs";

    this.#components.set("tab_text", new Button().content("📝 Text & Chords").addClass("tab"));
    this.#components.set("tab_score", new Button().content("🎵 Scores").addClass("tab"));
    this.#components.set("tab_playback", new Button().content("🎧 Playbacks").addClass("tab"));
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
