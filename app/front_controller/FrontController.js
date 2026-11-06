import Dispatcher from './Dispatcher.js';

export default class FrontController {
  #dispatcher;
  
  constructor() {
    this.#dispatcher = new Dispatcher();
  }

  #trackRequest(request) {
    // logging
  }

  #isAuthenticUser() {
    // check
    return true;
  }
  
  handleRequest(request) {
    this.#trackRequest(request);
    
    if (this.#isAuthenticUser())
      this.#dispatcher.dispatch(request);
  }
}
