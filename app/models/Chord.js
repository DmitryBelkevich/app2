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
    index = 0;
    for (const char of chars) {
      if (char == "." || char == "_") {
        this.#postfix += char;
      } else {
        index++;
      }
    }

    chars = chars.slice(0, index);

    // TODO
    value = chars.join("");

    if (value.includes("/")) {
      const bass = value.split("/")[1];
      this.#bass = new Note(bass);
    }

    value = value.split("/")[0];
    
    console.log(this);
    console.log(value);
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
