import Autoscroll from './components/Autoscroll.js';

export default class SongView {
  #autoscroll;
  
  constructor() {
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
