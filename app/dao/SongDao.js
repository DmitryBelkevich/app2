import SongMapper from '../mappers/SongMapper.js';
import SongsMapper from '../mappers/SongsMapper.js';

import ApiAdapter from '../adapters/ApiAdapter.js';

export default class SongDao {
  #adapter;

  constructor() {
    this.#adapter = new ApiAdapter();
  }

  async getAll() {
    const arr = await this.#adapter.load("https://dmitrybelkevich.github.io/app3/api/songs");

    const songs = [];
    
    return songs;
  }

  async getById(id) {
    const obj = await this.#adapter.load("https://dmitrybelkevich.github.io/app3/api/songs?id=" + id);

    const song = null;
    
    return song;
  }
}
