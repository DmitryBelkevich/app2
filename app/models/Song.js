import Model from "./Model.js";

export default class Song extends Model {
  #band;
  #title;
  #tags = [];
  #genre;
  #raiting;

  #text;
  #score;
  #playback;

  get band() {
    return this.#band;
  }

  set band(band) {
    this.#band = band;
  }

  get tags() {
    return this.#tags;
  }

  set tags(tags) {
    this.#tags = tags;
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

  get raiting() {
    return this.#raiting;
  }

  set raiting(raiting) {
    this.#raiting = raiting;
  }

  get text() {
    return this.#text;
  }

  set text(text) {
    this.#text = text;
  }

  get score() {
    return this.#score;
  }

  set score(score) {
    this.#score = score;
  }

  get playback() {
    return this.#playback;
  }

  set playback(playback) {
    this.#playback = playback;
  }
}
