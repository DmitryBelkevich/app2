import Genre from '../Genre.js';

export default class GenreBuilder {
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
    const genre = new Genre();

    genre.id = this.#id;
    genre.title = this.#title;
    genre.songs = this.#songs;
    
    return genre;
  }
}
