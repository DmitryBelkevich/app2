import Assert from '../libs/tests/Assert.js';

import Calculator from '../../app/Calculator.js';

export default class CalculatorTest {
  #calculator;

  // test
  testAdd() {
    // init
    const calculator = new Calculator();

    // action
    const result = calculator.add(1, 2);

    // assert
    Assert.assertEquals(3, result, "1 + 2 must be 3");
  }

  // test
  testSub() {
    // init
    const calculator = new Calculator();

    // action
    const result = calculator.sub(1, 2);

    // assert
    Assert.assertEquals(-1, result, "1 - 2 must be -1");
  }
}
