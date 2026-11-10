import Assert from '../../libs/tests/Assert.js';

import Chord from '../../../app/models/Chord.js';
// import Note from '../../../app/models/Note.js';

export default class ChordTest {
  #chord;

  // test
  testUp() {
    // init
    // const note = new Note("A");
    const chord = new Chord("Am");

    // action
    chord.up();
    chord.up();

    // assert
    Assert.assertEquals("Bm", chord.toString(), "Am + up must be Bm");
  }
}
