import ApiAdapter from '../adapters/ApiAdapter.js';

import GenreMapper from '../mappers/GenreMapper.js';

export default class GenreDao {
  #adapter;
  #mapper;

  constructor() {
    this.#adapter = new ApiAdapter();
    this.#mapper = new GenreMapper();
  }
  
  async getAll() {
    const arr = await this.#adapter.load("https://dmitrybelkevich.github.io/app3/api/genres");

    const genres = this.#mapper.read(arr);
    
    return genres;
  }

  async getById(id) {
    const obj = await this.#adapter.load("https://dmitrybelkevich.github.io/app3/api/genres?id=" + id);

    const genre = this.#mapper.read(obj);
    
    return genre;
  }
}
