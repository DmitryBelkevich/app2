import CssLoader from '../loaders/CssLoader.js';

export default class SongView {
  #cssLoader;
  #components = [];
  
  constructor() {
    this.#cssLoader = new CssLoader();

    this.#cssLoader.load("./app/views/css/reset.css");
    this.#cssLoader.load("./app/views/css/settings.css");
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

  setPageTitle(title) {
    document.title = title;
  }
}
