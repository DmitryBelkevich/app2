import Note from "./Note.js";

export default class Chord {
  #value = "";
  
  #prefix = "";
  #note;
  #postfix = "";

  #bass;

  constructor(value) {
    // TODO
    this.#parser(value);
  }

  get value() {
    return this.#value;
  }

  set value(value) {
    // TODO
  }

  #parser(value) {
    // TODO
    var chars = value.split("");

    // let i = 0;
    for (const char of chars) {
      if (char == "." || char == "_") {
        this.#prefix += char;
        // i++;
        chars = chars.slice(1)
      } else
        break;
    }

    console.log(chars);
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
