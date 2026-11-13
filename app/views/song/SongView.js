import CssLoader from '../loaders/CssLoader.js';

import Autoscroll from './services/Autoscroll.js';

export default class SongView {
  #cssLoader;
  #components = [];

  #autoscroll;
  
  constructor() {
    this.#cssLoader = new CssLoader();

    this.#cssLoader.load("./app/views/css/reset.css");
    this.#cssLoader.load("./app/views/css/settings.css");

    this.#autoscroll = new Autoscroll();
  }

  init() {
    for (const component of this.#components)
      component.init();

    this.#autoscroll.run();
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

  setPageTitle(title) {
    document.title = title;
  }
}
