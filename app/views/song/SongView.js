import View from '../View.js';

import NavigatorComponent from './components/NavigatorComponent.js';
import TitleComponent from './components/TitleComponent.js';
import TextComponent from './components/TextComponent.js';

import Autoscroll from './services/Autoscroll.js';

export default class SongView extends View {
  #components = new Map();
  #autoscroll = new Autoscroll();
  
  constructor(song) {
    super();
    
    this._cssLoader.load("./app/views/song/css/nav.css");

    this.setPageTitle(song.band + " - " + song.title);

    this.#components.set("navigator", new NavigatorComponent());
    this.#components.set("title", new TitleComponent());
    this.#components.set("text", new TextComponent());
  }

  init() {
    for (const component of this.#components.values())
      component.init();
  }

  get components() {
    return this.#components;
  }

  get autoscroll() {
    return this.#autoscroll;
  }
}
