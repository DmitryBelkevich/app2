import GenreDao from '../dao/GenreDao.js';

export default class GenreService {
  #genreDao;
  
  constructor() {
    this.#genreDao = new GenreDao();
  }
  
  async getAll() {
    const genres = await this.#genreDao.getAll();
    
    return genres;
  }

  async getById(id) {
    const genre = await this.#genreDao.getById(id);
    
    return genre;
  }
}
