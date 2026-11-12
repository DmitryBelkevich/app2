import Controller from './Controller.js';

import SongService from '../services/SongService.js';

import SongView from '../views/song/SongView.js';

export default class SongController extends Controller {
  #songService;
  
  #song;
  
  #songView;
  
  constructor() {
    super();
    this.#songService = new SongService();
  }

  async init() {
    this.#song = await this.#songService.getById(this._params.id);
    console.log(this.#song);

    this.#songView = new SongView();
  }
}
