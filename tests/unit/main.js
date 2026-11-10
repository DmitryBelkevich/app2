import UnitTest from '../libs/tests/UnitTest.js';

import CalculatorTest from './CalculatorTest.js';
import NoteTest from './models/NoteTest.js';

function main() {
  // UnitTest.run(new CalculatorTest());
  UnitTest.run(new NoteTest());
}

const app = main();
