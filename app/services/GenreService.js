import GenreDao from '../dao/GenreDao.js';

export default class GenreService {
  #genreDao;
  
  constructor() {
    this.#genreDao = new GenreDao();
  }
  
  async getAll() {
    return this.#genreDao.getAll();
  }

  async getById(id) {
    return this.#genreDao.getById(id);
  }
}
