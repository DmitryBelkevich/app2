import Controller from './Controller.js';

import SongService from '../services/SongService.js';
import SongView from '../views/SongView.js';

export default class SongController extends Controller {
  #songService;
  #song;
  #songView;
  
  constructor() {
    super();
    this.#songService = new SongService();
  }

  async init() {
    this.#song = await this.#songService.getById(1);
    this.#songView = new SongView();

    console.log(this.#song);
  }
}
