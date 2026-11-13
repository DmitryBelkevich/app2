import Config from '../config/Config.js';

import Controller from './Controller.js';

import SongService from '../services/SongService.js';
import GenreService from '../services/GenreService.js';

import ListView from '../views/list/ListView.js';
import GenreComponent from '../views/list/components/GenreComponent.js';
import SongComponent from '../views/list/components/SongComponent.js';

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
    this.#view.setPageTitle("Track-list");

    for (const genre of this.#genres) {
      this.#view.addComponent(new GenreComponent(genre));

      for (const song of genre.songs)
        this.#view.addComponent(new SongComponent(song));
    }
    
    this.#view.init();

    // binds
    for (const component of this.#view.components) {
      if (component instanceof SongComponent) {
        component.listeners.forEach(listener => listener(this.#openSong));
      }
    }
  }

  #openSong = (id) => {
    window.location.href = window.location.origin + "/" + Config.APP_NAME + "/song?id=" + id;
  }
}
