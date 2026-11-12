import View from '../View.js';

export default class ListView extends View {
  #body;
  #listeners = [];
  
  constructor() {
    super();
    this._cssLoader.load("./app/views/list/css/genre.css");
    this._cssLoader.load("./app/views/list/css/song.css");

    this.#body = document.body;
  }

  get listeners() {
    return this.#listeners;
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

  addSong(song) {
    // container
    const container = document.createElement("div");
    container.classList.add("song");

    // components
    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = song.title;

    const band = document.createElement("div");
    band.classList.add("band");
    band.textContent = song.band;

    const tags = document.createElement("div");
    tags.classList.add("tags");
    tags.textContent = "[" + song.tags.join(", ") + "]";

    if (!song.raiting.length) {
      const raiting = document.createElement("div");
      raiting.classList.add("raiting");
      for (let i = 0; i < song.raiting; i++)
        raiting.textContent += "⭐️";
    }

    // fill
    container.append(title, band, tags, raiting);
    this.#body.append(container);

    // listeners
    this.#listeners.push((handler) => {
      container.addEventListener('click', () => {
        handler(song.id);
      });
    });
  }
}
