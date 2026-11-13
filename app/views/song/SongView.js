import View from '../View.js';

import NavigatorComponent from './components/NavigatorComponent.js';
import TextComponent from './components/TextComponent.js';

import Autoscroll from './services/Autoscroll.js';

export default class SongView extends View {
  #components = new Map();

  #autoscroll;
  
  constructor(song) {
    super();
    
    this._cssLoader.load("./app/views/song/css/nav.css");

    this.#autoscroll = new Autoscroll();
    // this.#autoscroll.run();

    this.setPageTitle(song.band + " - " + song.title);

    this.#components.set("navigator", new NavigatorComponent());
    this.#components.set("text", new TextComponent(song));
  }

  init() {
    for (const component of this.#components)
      component.init();
  }

  get components() {
    return this.#components;
  }
}
