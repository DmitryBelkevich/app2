export default class SongComponent {
  #song;
  #element;
  
  constructor(song) {
    this.#song = song;

    // container
    this.#element = document.createElement("div");
    this.#element.classList.add("song");

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

    this.#element.append(title, band, tags, raiting);
  }

  get element() {
    return this.#element;
  }

  init() {
    // document.body.append(this.#element);
  }

  click(handler) {
    this.#element.addEventListener("click", () => {
      handler(this.#song.id);
    });
  }
}
