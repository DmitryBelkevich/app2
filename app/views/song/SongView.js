import View from '../View.js';

import Autoscroll from './components/Autoscroll.js';

export default class SongView extends View {
  #autoscroll;
  
  constructor() {
    super();
    this.#autoscroll = new Autoscroll();
    
    console.log(this);

    for (let i = 0; i < 1000; i++) {
      const div = document.createElement("div");
      div.textContent = i;
      document.body.append(div);
    }

    // this.#autoscroll.run();
  }
}
