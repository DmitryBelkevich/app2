import JsonLoader from '../loaders/JsonLoader.js';

import SongMapper from '../mappers/SongMapper.js';
import SongsMapper from '../mappers/SongsMapper.js';

export default class SongDao {
  #jsonLoader = new JsonLoader();
  
  async getAll() {
    const arr = await this.#jsonLoader.load("https://dmitrybelkevich.github.io/app3/api/songs"); // GET api/songs

    const mapper = new SongsMapper();
    const songs = mapper.read(arr);

    return songs;
  }

  async getById(id) {
    const arr = await this.#jsonLoader.load("https://dmitrybelkevich.github.io/app3/api/songs"); // GET api/songs?id=:id
    const obj = arr.find(obj => obj.id === id) || null;

    const mapper = new SongMapper();
    const song = mapper.read(obj);

    return song;
  }
}
