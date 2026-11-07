import Song from '../models/Song.js';

export default class SongBuilder {
  #id;
  #band;
  #title;
  #genre;

  buildId(id) {
    this.#id = id;
    return this;
  }

  buildBand(band) {
    this.#band = band;
    return this;
  }

  buildTitle(title) {
    this.#title = title;
    return this;
  }

  buildGenre(genre) {
    this.#genre = genre;
    return this;
  }

  build() {
    const song = new Song();

    //
    
    return song;
  }
}
