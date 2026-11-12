import CssLoader from './loaders/CssLoader.js';

export default class View {
  _cssLoader;
  
  constructor() {
    this._cssLoader = new CssLoader();

    this._cssLoader.load("./app/views/css/reset.css");
    this._cssLoader.load("./app/views/css/settings.css");
  }

  setPageTitle(title) {
    document.title = title;
  }
}
