import Controller from './Controller.js';

import SongService from '../services/SongService.js';

import SongView from '../views/song/SongView.js';
import TextComponent from '../views/song/components/TextComponent.js';

export default class SongController extends Controller {
  #songService;
  
  #song;
  
  #view;
  
  constructor() {
    super();
    this.#songService = new SongService();
  }

  async init() {
    this.#song = await this.#songService.getById(this._params.id);
    console.log(this.#song);

    this.#view = new SongView();
    this.#view.setPageTitle(this.#song.band + " - " + this.#song.title);

    this.#view.addComponent(new TextComponent(this.#song));
    
    this.#view.init();
  }
}
