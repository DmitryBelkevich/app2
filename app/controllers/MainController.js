import Controller from './Controller.js';

import MainView from '../views/main/MainView.js';

export default class MainController extends Controller {
  #view;
  
  constructor() {
    super();
  }

  async init() {
    this.#view = new MainView();
    this.#view.init();
  }
}
