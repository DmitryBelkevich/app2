import Controller from './Controller.js';

import SongDao from '../dao/SongDao.js';
import SongView from '../views/SongView.js';

export default class SongController extends Controller {
  #songDao;
  #song;
  #songView;
  
  constructor( ) {
    super();
    this.#songDao = new SongDao();
  }

  async init() {
    this.#song = await this.#songDao.getById(1);
    this.#songView = new SongView();

    console.log(this.#song);
  }
}
