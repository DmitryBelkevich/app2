import CssLoader from './loaders/CssLoader.js';

export default class View {
  #cssLoader;
  
  constructor() {
    this.#cssLoader = new CssLoader();

    this.#cssLoader.load("./css/reset.css");
  }
}
