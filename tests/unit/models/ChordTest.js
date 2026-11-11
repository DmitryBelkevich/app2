import Assert from '../../libs/tests/Assert.js';

import Chord from '../../../app/models/Chord.js';

export default class ChordTest {
  #chord;

  // test
  testValue() {
    // init
    const chord = new Chord("._A##m(sus4)/C##_.");

    // action

    // assert
    Assert.assertEquals("Am", chord.toString(), "Am must be Am");
  }
}
