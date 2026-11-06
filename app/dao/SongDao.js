import JsonLoader from '../loaders/JsonLoader.js';
import SongMapper from '../mappers/SongMapper.js';

import Song from '../models/Song.js';

class SongDaoWrapper {
  async #load(path) {
    console.log(path);
  }
  
  // async getAll() {
  //   const data = await this.#load("https://dmitrybelkevich.github.io/app3/api/songs");

  //   return data;
  // }

  // async getById(id) {
  //   const data = await this.#load("https://dmitrybelkevich.github.io/app3/api/songs");
  //   const element = data.find(song => song.id == id) || null;

  //   if (!element)
  //     return "";

  //   return element;
  // }
}

export default class SongDao {
  #jsonLoader = new JsonLoader();
  
  async getAll() {
    const arr = this.#jsonLoader.load("https://dmitrybelkevich.github.io/app3/api/songs");

    console.log(arr);
  }

  async getById(id) {
    const obj = this.#jsonLoader.load("https://dmitrybelkevich.github.io/app3/api/songs/" + id);
    
    console.log(obj);

    const mapper = new SongMapper();
    const song = mapper.read(obj);

    return song;
  }
}
