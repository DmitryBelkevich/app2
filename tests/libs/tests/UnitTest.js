export default class UnitTest {
  static run(obj, ...args) {
    const methodNames = new Set();
    let currentObj = obj;

    // Traverse the prototype chain to grab all method names
    while (currentObj && currentObj !== Object.prototype) {
      Object.getOwnPropertyNames(currentObj).forEach(prop => {
        if (prop !== 'constructor' && typeof obj[prop] === 'function') {
          methodNames.add(prop);
        }
      });
      
      currentObj = Object.getPrototypeOf(currentObj);
    }

    // Execute each found method bound to the original object context
    methodNames.forEach(methodName => {
      try {
        console.log(`Running: ${methodName}()`);
        obj[methodName](...args);
      } catch (error) {
        console.error(`Error running ${methodName}:`, error.message);
      }
    });
  }
}
