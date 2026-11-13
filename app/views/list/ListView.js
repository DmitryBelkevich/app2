import View from '../View.js';

import GenreComponent from './components/GenreComponent.js';
import SongComponent from './components/SongComponent.js';

export default class ListView extends View {
  #components = [];
  
  constructor() {
    super();

    this._cssLoader.load("./app/views/list/css/genre.css");
    this._cssLoader.load("./app/views/list/css/song.css");
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

  get listeners() {
    const listeners = [];
    
    for (const component of this.#components)
      if (component instanceof SongComponent)
        listeners.push(...component.listeners);
    
    return listeners;
  }
}
