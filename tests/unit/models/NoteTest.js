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

    // assert
    Assert.assertEquals("B", note.value, "A + up must be B");
  }

  // test
  testTransposeUp() {
    // init
    const note = new Note("A");

    // action
    note.transpose(2);

    // assert
    Assert.assertEquals("B", note.value, "A + 2 must be B");
  }

  // test
  testTransposeDown() {
    // init
    const note = new Note("A");

    // action
    note.transpose(-2);

    // assert
    Assert.assertEquals("G", note.value, "A - 2 must be G");
  }

  // test
  testRespell() {
    // init
    const note = new Note("A#");

    // action
    note.respell();

    // assert
    Assert.assertEquals("Bb", note.value, "A# respell must be Bb");
  }
}
