import SongDao from '../dao/SongDao.js';

export default class SongService {
  #songDao;
  
  constructor() {
    this.#songDao = new SongDao();
  }
  
  async getAll() {
    return this.#songDao.getAll();
  }

  async getById(id) {
    return this.#songDao.getById(id);
  }
}
