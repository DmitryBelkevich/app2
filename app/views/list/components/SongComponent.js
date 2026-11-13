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

    // fill
    container.append(title);
    this.#body.append(container);
  }
}
