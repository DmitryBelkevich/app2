import JsonLoader from '../loaders/JsonLoader.js';

import GenreMapper from '../mappers/GenreMapper.js';
import GenresMapper from '../mappers/GenresMapper.js';

import ApiAdapter from '../adapters/ApiAdapter.js';

export default class GenreDao {
  #jsonLoader;

  constructor() {
    this.#jsonLoader = new JsonLoader();
  }
  
  async getAll() {
    const adapter = new ApiAdapter();
    const arr = await this.#jsonLoader.load(adapter.load("https://dmitrybelkevich.github.io/app3/api/genres")); // GET api/genres

    const mapper = new GenresMapper();console.log(arr);
    const genres = mapper.read(arr);

    return genres;
  }

  async getById(id) {
    const arr = await this.#jsonLoader.load("https://dmitrybelkevich.github.io/app3/api/genres/?id=" + id); // GET api/genres/?id=:id
    const obj = arr.find(obj => obj.id == id) || null;

    const mapper = new GenreMapper();
    const genre = mapper.read(obj);

    return genre;
  }
}
