import GenresApiAdapter from './adapters/GenresApiAdapter.js';
import GenreApiAdapter from './adapters/GenreApiAdapter.js';

import GenreMapper from './mappers/GenreMapper.js';

export default class GenreDao {
  #mapper;

  constructor() {
    this.#mapper = new GenreMapper();
  }
  
  async getAll() {
    const arr = await new GenresApiAdapter().load("https://dmitrybelkevich.github.io/app3/api/genres");

    const genres = this.#mapper.read(arr);
    
    return genres;
  }

  async getById(id) {
    const obj = await new GenreApiAdapter.load("https://dmitrybelkevich.github.io/app3/api/genres?id=" + id);

    const genre = this.#mapper.read(obj);
    
    return genre;
  }
}
