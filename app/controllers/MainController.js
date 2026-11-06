import Controller from './Controller.js';

import MainView from '../views/MainView.js';

export default class MainController extends Controller {
  #mainView;
  
  constructor() {
    super();
  }

  async init() {
    this.#mainView = new MainView();
  }
}
