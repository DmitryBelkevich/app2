import CssLoader from './loaders/CssLoader.js';

export default class View {
  #cssLoader;
  
  constructor() {
    this.#cssLoader = new CssLoader();

    this.#cssLoader.load("./app/views/css/reset.css");
    this.#cssLoader.load("./app/views/css/settings.css");
  }
}
