import Config from '../config/Config.js';

import Controller from './Controller.js';

import SongService from '../services/SongService.js';
import GenreService from '../services/GenreService.js';

import ListView from '../views/list/ListView.js';

export default class ListController extends Controller {
  #songService;
  #genreService;
  
  #songs;
  #genres;
  
  #view;

  constructor() {
    super();
    this.#songService = new SongService();
    this.#genreService = new GenreService();
  }

  async init() {
    this.#songs = await this.#songService.getAll();
    this.#genres = await this.#genreService.getAll();

    console.log(this.#songs);
    console.log(this.#genres);

    this.#view = new ListView();

    // add components
    this.#genres.forEach(genre => {
      this.#view.addGenre(genre);

      genre.songs.forEach(song => {
        this.#view.addSong(song);
      });
    });

    // binds
    this.#view.binds.forEach((bind) => {
      bind(this.#openSong);
    });
  }

  #openSong = (id) => {console.log("openSong");
    window.location.href = window.location.origin + Config.APP_NAME + "/song?id=" + id;
  }
}
