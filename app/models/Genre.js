import Model from "./Model.js";

export default class Genre extends Model {
  #title;
  #songs = [];

  get title() {
    return this.#title;
  }

  set title(title) {
    this.#title = title;
  }

  get songs() {
    return this.#songs;
  }

  set songs(songs) {
    this.#songs = songs;
  }
}
