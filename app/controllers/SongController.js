import Config from '../config/Config.js';

import Controller from './Controller.js';

import SongService from '../services/SongService.js';

import SongView from '../views/song/SongView.js';

export default class SongController extends Controller {
  #songService;
  
  constructor() {
    super();
    this.#songService = new SongService();
  }

  async init() {
    const song = await this.#songService.getById(this._params.id);
    console.log(song);

    const view = new SongView(song);
    view.init();

    // binds
    view.components.get("navigator").components.get("list_button").click(this.open_list_controller);
    // view.components.get("navigator").components.get("autoscroll_button").click();
  }

  open_list_controller = () => {
    window.location.href = window.location.origin + "/" + Config.APP_NAME + "/list";
  }
}
