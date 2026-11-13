export default class SongComponent {
  #song;
  #body;
  
  constructor(song) {
    this.#song = song;

    this.#body = document.body;
  }

  init() {
    // container
    const container = document.createElement("div");
    container.classList.add("song");

    // components
    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = this.#song.title;

    const band = document.createElement("div");
    band.classList.add("band");
    band.textContent = this.#song.band;

    const tags = document.createElement("div");
    tags.classList.add("tags");
    if (song.tags.length)
      tags.textContent = "tags: " + "[" + this.#song.tags.join("] [") + "]";

    const raiting = document.createElement("div");
    raiting.classList.add("raiting");
    for (let i = 0; i < this.#song.raiting; i++)
      raiting.textContent += "⭐️";

    // fill
    container.append(title, band, tags, raiting);
    this.#body.append(container);
  }
}
