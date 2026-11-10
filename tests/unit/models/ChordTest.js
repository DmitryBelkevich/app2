import Assert from '../../libs/tests/Assert.js';

import Chord from '../../../app/models/Chord.js';
// import Note from '../../../app/models/Note.js';

export default class ChordTest {
  #chord;

  // test
  testValue() {
    // init
    // const note = new Note("A");
    const chord = new Chord("Am");

    // action

    // assert
    Assert.assertEquals("Am", chord.toString(), "Am must be Am");
  }
}
