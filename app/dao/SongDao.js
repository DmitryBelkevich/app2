import JsonLoader from '../loaders/JsonLoader.js';

import SongMapper from '../mappers/SongMapper.js';
import SongsMapper from '../mappers/SongsMapper.js';

import ApiAdapter from '../adapters/ApiAdapter.js';

export default class SongDao {
  #jsonLoader;
  #apiAdapter;

  constructor() {
    this.#jsonLoader = new JsonLoader();
    this.#apiAdapter = new ApiAdapter();
  }

  async getAll() {
    const arr = await this.#apiAdapter.load("https://dmitrybelkevich.github.io/app3/api/songs");
    const arr;
  }

  async getById(id) {
    const obj = await this.#apiAdapter.load("https://dmitrybelkevich.github.io/app3/api/songs?id=" + id);
    const obj;
  }
  
  // async getAll() {
  //   const arr = await this.#jsonLoader.load("https://dmitrybelkevich.github.io/app3/api/songs"); // GET api/songs

  //   const mapper = new SongsMapper();
  //   const songs = mapper.read(arr);

  //   return songs;
  // }

  // async getById(id) {
  //   const arr = await this.#jsonLoader.load("https://dmitrybelkevich.github.io/app3/api/songs?id=" + id); // GET api/songs?id=:id
  //   const obj = arr.find(obj => obj.id == id) || null;

  //   const mapper = new SongMapper();
  //   const song = mapper.read(obj);

  //   return song;
  // }
}
