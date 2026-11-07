export default class GenreBuider {
  #id;
  #title;
  #songs = [];

  buildId(id) {
    this.#id = id;
    return this;
  }

  buildTitle(title) {
    return this;
  }

  buildSongs(songs) {
    return this;
  }

  build() {
    return null;
  }
}
