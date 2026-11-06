import Model from './Model.js';

export default class Genre extends Model {
  #title;

  get title() {
    return this.#title;
  }

  set title(title) {
    this.#title = title;
  }
}
