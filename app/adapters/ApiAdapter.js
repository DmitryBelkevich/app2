import SongApiAdapter from './SongApiAdapter.js';
import GenreApiAdapter from './GenreApiAdapter.js';

export default class ApiAdapter {
  #adapter;
  
  async load(path) {
    if (path.includes("/api/songs"))
      this.#adapter = new SongApiAdapter();
    else if (path.includes("/api/genres"))
      this.#adapter = new GenreApiAdapter();

    const data = await this.#adapter.load(path);
    
    return data;
  }
}
