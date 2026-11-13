import CssLoader from '../loaders/CssLoader.js';

import GenreComponent from './components/GenreComponent.js';
import SongComponent from './components/SongComponent.js';

export default class ListView {
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
