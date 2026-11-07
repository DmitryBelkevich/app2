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
    const arr = await this.#jsonLoader.load(path);//"https://dmitrybelkevich.github.io/app3/api/songs"

    if (!path.includes("?id="))
      return arr;
    
    const id = path.slice(path.indexOf("?id=") + "?id=".length);
    const obj = arr.find(obj => obj.id == id) || null;//"https://dmitrybelkevich.github.io/app3/api/songs?id=1"
    
    return obj;
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
