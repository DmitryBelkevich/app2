import Note from "./Note.js";

export default class Chord {
  #value = "";
  
  #prefix = "";
  #note;
  #body;
  #bass;
  #postfix = "";

  constructor(value) {
    this.#parser(value);

    // builder
    this.#value =
      this.#prefix
      + this.#note
      + this.#body
      + (this.#bass ? "/" + this.#bass : "")
      + this.#postfix;
  }

  get value() {
    return this.#value;
  }

  set value(value) {
    this.#parser(value);
    
    // builder
    this.#value =
      this.#prefix
      + this.#note
      + this.#body
      + (this.#bass ? "/" + this.#bass : "")
      + this.#postfix;
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

    value = chars.join("");
    
    // body
    this.#body = value;
  }

  valueOf() {
    return this.#value;
  }

  toString() {
    return this.#value;
  }

  transpose(count) {
    if (!count)
      return;

    this.#note.transpose(count);

    if (this.#bass)
      this.#bass.transpose(count);

    // builder
    this.#value =
      this.#prefix
      + this.#note
      + this.#body
      + (this.#bass ? "/" + this.#bass : "")
      + this.#postfix;
  }

  up() {
    this.#note.up();

    if (this.#bass)
      this.#bass.up();
    
    // builder
    this.#value =
      this.#prefix
      + this.#note
      + this.#body
      + (this.#bass ? "/" + this.#bass : "")
      + this.#postfix;
  }

  down() {
    this.#note.down();

    if (this.#bass)
      this.#bass.down();
    
    // builder
    this.#value =
      this.#prefix
      + this.#note
      + this.#body
      + (this.#bass ? "/" + this.#bass : "")
      + this.#postfix;
  }

  respell() {
    this.#note.respell();

    if (this.#bass)
      this.#bass.respell();
    
    // builder
    this.#value =
      this.#prefix
      + this.#note
      + this.#body
      + (this.#bass ? "/" + this.#bass : "")
      + this.#postfix;
  }
}
