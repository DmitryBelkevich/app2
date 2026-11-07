import GenreMapper from '../mappers/GenreMapper.js';
import GenresMapper from '../mappers/GenresMapper.js';

import ApiAdapter from '../adapters/ApiAdapter.js';

export default class GenreDao {
  #adapter;

  constructor() {
    this.#adapter = new ApiAdapter();
  }
  
  async getAll() {
    const arr = await this.#adapter.load("https://dmitrybelkevich.github.io/app3/api/genres");

    const genres = [];
    
    return genres;
  }

  async getById(id) {
    const obj = await this.#adapter.load("https://dmitrybelkevich.github.io/app3/api/genres?id=" + id);

    const genre = null;
    
    return genre;
  }
}
