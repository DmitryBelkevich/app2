export default class GenreComponent {
  #genre;
  
  constructor(genre) {
    this.#genre = genre;

    this.#body = document.body;
  }

  init() {
    // container
    const container = document.createElement("div");
    container.classList.add("genre");
    container.textContent = genre.title;

    // components

    // fill
    this.#body.append(container);
  }
}
