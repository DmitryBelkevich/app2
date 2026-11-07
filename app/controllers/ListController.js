import Controller from './Controller.js';

import GenreService from '../services/GenreService.js';
import ListView from '../views/ListView.js';

export default class ListController extends Controller {
  #genreService;
  #genres;
  #listView;

  constructor() {
    super();
    this.#genreService = new GenreService();
  }

  async init() {
    this.#genres = await this.#genreService.getAll();
    this.#listView = new ListView();

    console.log(this.#genres);
  }
}
