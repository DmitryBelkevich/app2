import Assert from '../../libs/tests/Assert.js';

import Note from '../../../app/models/Note.js';

export default class NoteTest {
  #note;

  // test
  testUp() {
    // init
    const note = new Note("A");

    // action
    note.up();
    note.up();
    const result = note.value;

    // assert
    Assert.assertEquals("B", result, "A + up must be B");
  }

  // test
  testTransposeUp() {
    // init
    const note = new Note("B");

    // action
    note.transpose(2);
    const result = note.value;

    // assert
    Assert.assertEquals("B", result, "A + 2 must be B");
  }
}
