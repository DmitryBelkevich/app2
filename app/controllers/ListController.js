import Controller from './Controller.js';

import SongService from '../services/SongService.js';
import ListView from '../views/ListView.js';

export default class ListController extends Controller {
  #genreService;
  #genres;
  #listView;

  constructor() {
    super();
    this.#genreService = new SongService();
  }

  async init() {
    this.#genres = await this.#genreService.getAll();
    this.#listView = new ListView();

    console.log(this.#genres);
  }
}
