import SongMapper from '../mappers/SongMapper.js';
import SongsMapper from '../mappers/SongsMapper.js';

import ApiAdapter from '../adapters/ApiAdapter.js';

export default class SongDao {
  #apiAdapter;

  constructor() {
    this.#apiAdapter = new ApiAdapter();
  }

  async getAll() {
    const arr = await this.#apiAdapter.load("https://dmitrybelkevich.github.io/app3/api/songs");

    const songs = [];
    
    return songs;
  }

  async getById(id) {
    const obj = await this.#apiAdapter.load("https://dmitrybelkevich.github.io/app3/api/songs?id=" + id);

    const song = null;
    
    return song;
  }
}
