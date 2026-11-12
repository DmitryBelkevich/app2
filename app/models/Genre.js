import Model from './Model.js';

export default class Genre {
  #id;

  get id() {
    return #id;
  }

  set id(id) {
    this.#id = id;
  }
  
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
