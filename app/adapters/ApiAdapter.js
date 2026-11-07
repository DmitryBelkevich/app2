import JsonLoader from '../loaders/JsonLoader.js';

export default class ApiAdapter {
  #adapter;
  
  async load(path) {
    if (path.includes("/api/songs"))
      this.#adapter = new SongApiAdapter();
    else if (path.includes("/api/genres"))
      this.#adapter = new GenreApiAdapter();
    
    return await this.#adapter.load(path);
  }
}

class SongApiAdapter {
  #jsonLoader;
  
  constructor() {
    this.#jsonLoader = new JsonLoader();
  }
  
  async load(path) {
    const arr = await this.#jsonLoader.load("https://dmitrybelkevich.github.io/app3/api/songs");
    return null;
  }
}

class GenreApiAdapter {
  #jsonLoader;
  
  constructor() {
    this.#jsonLoader = new JsonLoader();
  }
  
  async load(path) {
    // const result = path.replace("api/genres", "api/songs");
    return null;
  }
}
