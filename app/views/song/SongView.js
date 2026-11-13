import View from '../View.js';

import Autoscroll from './services/Autoscroll.js';

export default class SongView extends View {
  #components = [];

  #autoscroll;
  
  constructor(song) {
    super();
    
    this._cssLoader.load("./app/views/song/css/nav.css");

    this.#autoscroll = new Autoscroll();
    // this.#autoscroll.run();

    this.setPageTitle(song.band + " - " + song.title);

    // this.#view.addComponent(new NavigatorComponent());
    // this.#view.addComponent(new TextComponent(this.#song));
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
