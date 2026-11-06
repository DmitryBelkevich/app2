import UnitTest from '../libs/tests/UnitTest.js';

import CalculatorTest from './CalculatorTest.js';

function main() {
  UnitTest.run(new CalculatorTest());
}

const app = main();
