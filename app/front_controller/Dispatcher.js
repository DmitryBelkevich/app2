import Config from '../config/Config.js';

import MainController from '../controllers/MainController.js';
import ListController from '../controllers/ListController.js';
import SongController from '../controllers/SongController.js';

export default class Dispatcher {
  #routes = [];
  
  constructor() {
    this.#routes[""] = new MainController();
    this.#routes["list"] = new ListController();
    this.#routes["song"] = new SongController();
  }
  
  dispatch(request) {
    const routeName = request.slice(("/" + Config.APP_NAME + "/").length);
    
    const controller = this.#routes[routeName];
    controller.init();
  }
}
