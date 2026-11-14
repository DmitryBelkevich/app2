import Config from '../config/Config.js';

import Controller from './Controller.js';

import SongService from '../services/SongService.js';
import GenreService from '../services/GenreService.js';

import ListView from '../views/list/ListView.js';
import SongComponent from '../views/list/components/SongComponent.js';

export default class ListController extends Controller {
  #songService;
  #genreService;
  
  #view;

  constructor() {
    super();
    this.#songService = new SongService();
    this.#genreService = new GenreService();
  }

  async init() {
    const songs = await this.#songService.getAll();
    const genres = await this.#genreService.getAll();

    console.log(songs);
    console.log(genres);

    this.#view = new ListView(genres);
    this.#view.init();

    // binds
    // this.#view.listeners.forEach(listener => listener(this.#open_song_controller));
    const arr = this.#view.song_components();
    console.log(arr);
  }

  #open_song_controller = (id) => {
    window.location.href = window.location.origin + "/" + Config.APP_NAME + "/song?id=" + id;
  }
}
