import GenreDao from '../dao/GenreDao.js';

export default class GenreService {
  #genreDao;
  
  constructor() {
    this.#genreDao = new GenreDao();
  }
  
  async getAll() {
    return await this.#genreDao.getAll();
  }

  async getById(id) {
    return await this.#genreDao.getById(id);
  }
}
