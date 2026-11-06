import JsonLoader from '../loaders/JsonLoader.js';

// import GenreMapper from '../mappers/GenreMapper.js';
// import GenresMapper from '../mappers/GenresMapper.js';

export default class GenreDao {
  #jsonLoader;

  constructor() {
    this.jsonLoader = new JsonLoader();
  }
  
  async getAll() {
    return null;
  }

  async getById(id) {
    return null;
  }
}
