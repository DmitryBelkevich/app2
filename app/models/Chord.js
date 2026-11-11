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

    // prefix
    let index = 0;
    for (const char of chars) {
      if (char == "." || char == "_") {
        this.#prefix += char;
        index++;
      } else
        break;
    }

    chars = chars.slice(index);

    // postfix
    let index = 0;
    for (const char of chars) {
      if (char == "." || char == "_") {
        this.#postfix += char;
      } else {
        index++;
      }
    }

    chars = chars.slice(0, index);

    console.log(this.#prefix);
    console.log(this.#postfix);
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
