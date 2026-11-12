import View from '../View.js';

export default class ListView extends View {
  constructor() {
    super();
    this._cssLoader.load("./app/views/list/css/genre.css");
    this._cssLoader.load("./app/views/list/css/song.css");
  }
}
