export default class Assert {
  static assertEquals(expectation, result, message) {
    var icon = "🔴";
    if (expectation == result)
      icon = "🟢";

    Assert.#message(icon, message, result, expectation);
  }

  static #message(icon, message, result, expectation) {
    const str =
      icon
      + " " + "\"" + message + "\"."
      + " [" + result + "|" + expectation + "]"
      ;
    
    console.log(str);
  }
}
