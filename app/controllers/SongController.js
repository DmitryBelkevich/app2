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
    const id = 1;
    
    this.#song = await this.#songService.getById(id);
    this.#songView = new SongView();

    console.log(this.#song);
  }
}
