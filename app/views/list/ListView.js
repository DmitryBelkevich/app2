import View from '../View.js';

import GenreComponent from './components/GenreComponent.js';
import SongComponent from './components/SongComponent.js';

export default class ListView extends View {
  #components = [];
  
  constructor(genres) {
    super();

    this._cssLoader.load("./app/views/list/css/genre.css");
    this._cssLoader.load("./app/views/list/css/song.css");

    this.setPageTitle("Track-list");

    for (const genre of genres) {
      this.#components.push(new GenreComponent(genre));

      for (const song of genre.songs)
        this.#components.push(new SongComponent(song));
    }
  }

  init() {
    for (const component of this.#components)
      component.init();
  }

  get components() {
    return this.#components;
  }

  get song_components() {
    const arr = this.#components.filter(component => component instanceof SongComponent);
    console.log(arr);
    return null;
  }
}
