import Note from "./Note.js";

export default class Chord {
  #value = "";
  
  #prefix = "";
  #note;
  #body;
  #bass;
  #postfix = "";

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

    value = chars.join("");

    // bass
    if (value.includes("/")) {
      const bass = value.split("/")[1];
      this.#bass = new Note(bass);
    }

    value = value.split("/")[0];

    // note
    chars = value.split("");

    const notes = ["A", "B", "C", "D", "E", "F", "G"];
    const symbols = ["#", "b"];

    var note = "";
    index = 0;
    for (const char of chars) {
      if (notes.includes(char) || symbols.includes(char)) {
        note += char;
        index++;
      } else
        break;
    }
    chars = chars.slice(index);

    this.#note = new Note(note);
    
    console.log(chars);
    console.log(this);
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
