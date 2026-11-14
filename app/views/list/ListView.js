import View from '../View.js';

import GenreComponent from './components/GenreComponent.js';
import SongComponent from './components/SongComponent.js';

export default class ListView extends View {
  #components = new Map();
  
  constructor(genres) {
    super();

    this._cssLoader.load("./app/views/list/css/genre.css");
    this._cssLoader.load("./app/views/list/css/song.css");

    this.setPageTitle("Track-list");console.log(genres);

    for (const genre of genres) {
      this.#components.set(genre.title, new GenreComponent(genre));

      for (const song of genre.songs)
        this.#components.set(genre.title, new SongComponent(song));
    }
  }

  init() {
    for (const component of this.#components.values())
      component.init();
  }

  get components() {
    return this.#components;
  }

  get listeners() {
    const listeners = [];
    
    for (const component of this.#components)
      listeners.push(...component.listeners);
    
    return listeners;
  }
}
