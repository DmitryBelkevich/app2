export default class TitlePanel {
  #element;
  
  constructor(song) {
    // container
    this.#element = document.createElement("div");
    this.#element.id = "title";

    // 1. title
    const title = document.createElement('div');
    title.classList.add("title");
    title.textContent = song.title;

    // 2. band
    const band = document.createElement('div');
    band.classList.add("band");
    band.textContent = song.band;

    // fill container
    this.#element.append(title, band);
  }

  init() {
    document.body.append(this.#element);
  }
}
