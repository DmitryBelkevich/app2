import Note from "./Note.js";

export default class Chord {
  #value = "";
  
  #prefix = "";
  #note;
  #postfix = "";

  #bass;

  constructor(value) {
    // TODO
  }

  get value() {
    return this.#value;
  }

  set value(value) {
    // TODO
  }

  #parser(value) {
    // TODO
  }

  valueOf() {
    return this.#value;
  }

  toString() {
    return this.#value;
  }

  transpose(count) {
    // TODO
  }

  up() {
    // TODO
  }

  down() {
    // TODO
  }

  respell() {
    // TODO
  }
}
