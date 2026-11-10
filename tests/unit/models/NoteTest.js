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
    const result = note.value;

    // assert
    Assert.assertEquals("A#", result, "A + up must be A#");
  }
}
