export default class SongComponent {
  #song;
  #container;
  
  constructor(song) {
    this.#song = song;

    // container
    this.#container = document.createElement("div");
    this.#container.classList.add("song");

    // components
    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = this.#song.title;

    const band = document.createElement("div");
    band.classList.add("band");
    band.textContent = this.#song.band;

    const tags = document.createElement("div");
    tags.classList.add("tags");
    if (this.#song.tags.length)
      tags.textContent = "tags: " + "[" + this.#song.tags.join("] [") + "]";

    const raiting = document.createElement("div");
    raiting.classList.add("raiting");
    for (let i = 0; i < this.#song.raiting; i++)
      raiting.textContent += "⭐️";

    this.#container.append(title, band, tags, raiting);
  }

  init() {
    document.body.append(this.#container);
  }

  click(handler) {
    this.#element.addEventListener("click", () => {
      handler(this.#song.id);
    });
  }
}
