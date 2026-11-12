import Config from '../config/Config.js';

import JsonLoader from '../loaders/JsonLoader.js';

import SongApiAdapter from './adapters/SongApiAdapter.js';

import SongMapper from './mappers/SongMapper.js';

export default class SongDao {
  #jsonLoader;
  #mapper;

  constructor() {
    this.#jsonLoader = new JsonLoader();
    this.#mapper = new SongMapper();
  }

  async getAll() {
    const arr = await this.#jsonLoader.load(Config.API + "songs");
    
    const songs = this.#mapper.read(arr);
    
    return songs;
  }

  async getById(id) {
    const obj = await new SongApiAdapter().load(Config.API + "songs?id=" + id);
    
    const song = this.#mapper.read(obj);
    
    return song;
  }
}
