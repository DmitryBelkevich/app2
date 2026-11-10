import Note from "./Note.js";

export default class Chord {
  #value = "";
  
  #prefix = "";
  #note;
  #postfix = "";

  #bass;

  get value() {
    return this.#value;
  }

  set value(value) {
    
  }
}
