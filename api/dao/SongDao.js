// import config from '../config/config.js';
import JsonLoader from '../../libs/loaders/JsonLoader.js';

export default class SongDao {
  #path;
  #loader;
  
  constructor() {
    this.#path = "../database/songs.json";
    this.#loader = new JsonLoader();
  }
  
  async getAll() {
    const songs = await this.#loader.load(this.#path);
    
    return songs;
  }

  async getById(id) {
    const songs = await this.#loader.load(this.#path);

    const song = songs.find(song => song.id == id) || null;
    
    return song;
  }
}
