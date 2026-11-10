import Assert from '../../libs/tests/Assert.js';

import Note from '../../../app/Note.js';

export default class NoteTest {
  #note;

  // test
  testUp() {
    // init
    const note = new Note("A");

    // action
    const result = note.up();

    // assert
    Assert.assertEquals("A#", result, "A + up must be A#");
  }
}
