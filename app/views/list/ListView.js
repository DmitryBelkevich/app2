import View from '../View.js';

export default class ListView extends View {
  #body;
  
  constructor() {
    super();
    this._cssLoader.load("./app/views/list/css/genre.css");
    this._cssLoader.load("./app/views/list/css/song.css");

    this.#body = document.body;
  }

  addGenre(genre) {
    // container
    const container = document.createElement("div");
    container.classList.add("genre");
    container.textContent = genre.title;

    // components

    // fill
    this.#body.append(container);
  }

  addSong(id, band, title, raiting) {
    // TODO
  }
}
