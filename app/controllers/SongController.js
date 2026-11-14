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
    // view.components.navigator.click(this.open_list_controller);
    console.log(view.components.get("navigator").components);
  }

  open_list_controller = () => {
    window.location.href = window.location.origin + "/" + Config.APP_NAME + "/list";
  }
}
