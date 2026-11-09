import Controller from './Controller.js';

import SongService from '../services/SongService.js';
import GenreService from '../services/GenreService.js';
import ListView from '../views/ListView.js';

export default class ListController extends Controller {
  #songService;
  #genreService;
  #songs;
  #genres;
  #listView;

  constructor() {
    super();
    this.#songService = new SongService();
    this.#genreService = new GenreService();
  }

  async init() {
    // this.#songs = await this.#songService.getAll();
    this.#genres = await this.#genreService.getAll();

    // console.log(this.#songs);
    console.log(this.#genres);

    this.#listView = new ListView();
  }
}
