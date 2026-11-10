import UnitTest from '../libs/tests/UnitTest.js';

import CalculatorTest from './CalculatorTest.js';
import NoteTest from './models/NoteTest.js';
import ChordTest from './models/ChordTest.js';

function main() {
  // UnitTest.run(new CalculatorTest());
  
  // UnitTest.run(new NoteTest());
  UnitTest.run(new ChordTest());
}

const app = main();
