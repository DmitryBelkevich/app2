import JsonLoader from './libs/loaders/JsonLoader.js';

export default class SongDao {
  #loader;
  
  constructor() {
    this.#loader = new JsonLoader();
  }
  
  async getAll() {
    const songs = await this.#loader.load("../database/songs.json");
    
    return songs;
  }

  async getById(id) {
    const songs = await this.#loader.load("../database/songs.json");

    const song = songs.find(song => song.id == id) || null;
    
    return song;
  }
}
