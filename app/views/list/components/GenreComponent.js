export default class GenreComponent {
  #genre;
  #body;
  #listeners = [];
  
  constructor(genre) {
    this.#genre = genre;

    this.#body = document.body;
  }

  get listeners() {
    return this.#listeners;
  }

  init() {
    // container
    const container = document.createElement("div");
    container.classList.add("genre");
    container.textContent = this.#genre.title;

    // components

    // fill
    this.#body.append(container);
  }
}
