import JsonLoader from '../../libs/loaders/JsonLoader.js';

export default class SongDao {
  #loader;
  #path = "../database/songs.json";
  
  constructor() {
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
