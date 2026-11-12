import Config from '../config/Config.js';

import SongsApiAdapter from './adapters/SongsApiAdapter.js';
import SongApiAdapter from './adapters/SongApiAdapter.js';

import SongMapper from './mappers/SongMapper.js';

export default class SongDao {
  #mapper;

  constructor() {
    this.#mapper = new SongMapper();
  }

  async getAll() {
    const arr = await new SongsApiAdapter().load(Config.API + "songs");
    
    const songs = this.#mapper.read(arr);
    
    return songs;
  }

  async getById(id) {
    const obj = await new SongApiAdapter().load(Config.API + "songs?id=" + id);
    
    const song = this.#mapper.read(obj);
    
    return song;
  }
}
