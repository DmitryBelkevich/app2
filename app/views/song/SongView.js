import View from '../View.js';

import Autoscroll from './services/Autoscroll.js';

import Navigator from './components/Navigator.js';
import Text from './components/Text.js';

export default class SongView extends View {
  #autoscroll;
  #components = [];
  
  constructor() {
    super();
    this.#autoscroll = new Autoscroll();

    // components
    this.#components.push(new Navigator());
    this.#components.push(new Text());

    // this.#autoscroll.run();
  }
}
