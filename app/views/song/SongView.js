import View from '../View.js';

import NavigatorPanel from './panels/NavigatorPanel.js';
import TitlePanel from './panels/TitlePanel.js';
import TabsPanel from './panels/TabsPanel.js';
import TextPanel from './panels/TextPanel.js';

import Autoscroll from './services/Autoscroll.js';

export default class SongView extends View {
  #components = new Map();
  #autoscroll = new Autoscroll();
  
  constructor(song) {
    super();
    
    this._cssLoader.load("./app/views/song/css/nav.css");
    this._cssLoader.load("./app/views/song/css/title.css");
    this._cssLoader.load("./app/views/song/css/tabs.css");

    this.setPageTitle(song.band + " - " + song.title);

    this.#components.set("navigator", new NavigatorPanel());
    this.#components.set("title", new TitlePanel(song));
    this.#components.set("tabs", new TabsPanel());
    this.#components.set("text", new TextPanel());
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
