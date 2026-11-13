import GenreComponent from './components/GenreComponent.js';
import SongComponent from './components/SongComponent.js';

export default class ListView {
  #components = [];
  
  constructor() {
    
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
}
