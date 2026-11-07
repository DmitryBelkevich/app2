export default class GenreBuider {
  #id;
  #title;
  #songs = [];

  buildId(id) {
    this.#id = id;
    return this;
  }

  buildTitle(title) {
    this.#title = title;
    return this;
  }

  buildSongs(songs) {
    this.#songs = songs;
    return this;
  }

  build() {
    return null;
  }
}
