import View from '../View.js';

import Autoscroll from './services/Autoscroll.js';

export default class SongView extends View {
  #components = [];

  #autoscroll;
  
  constructor() {
    super();

    this._cssLoader.load("./app/views/song/css/nav.css");

    this.#autoscroll = new Autoscroll();
    // this.#autoscroll.run();
  }

  init() {
    for (const component of this.#components)
      component.init();
  }

  get components() {
    return this.#components;
  }

  addComponent(component) {
    this.#components.push(component);
  }

  removeComponent(component) {
    // TODO
  }
}
