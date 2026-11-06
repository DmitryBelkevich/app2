import Controller from './Controller.js';

import SongDao from '../dao/SongDao.js';
import ListView from '../views/ListView.js';

export default class ListController extends Controller {
  #songDao;
  #songs;
  #listView;

  constructor() {
    super();
    this.#songDao = new SongDao();
  }

  async init() {
    this.#songs = await this.#songDao.getAll();
    this.#listView = new ListView();

    console.log(this.#songs);
  }
}
