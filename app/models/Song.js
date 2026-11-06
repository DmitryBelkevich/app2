import Model from './Model.js';

export default class Song extends Model {
  #band;
  #title;
  #genre;

  get band() {
    return this.#band;
  }

  set band(band) {
    this.#band = band;
  }

  get title() {
    return this.#title;
  }

  set title(title) {
    this.#title = title;
  }

  get genre() {
    return this.#genre;
  }

  set genre(genre) {
    this.#genre = genre;
  }
}
