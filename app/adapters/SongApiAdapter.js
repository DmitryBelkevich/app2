import JsonLoader from '../loaders/JsonLoader.js';

export default class SongApiAdapter {
  #jsonLoader;
  
  constructor() {
    this.#jsonLoader = new JsonLoader();
  }
  
  async load(path) {
    if (!path.includes("?id="))
      return await this.#getAll(path);
    else
      return await this.#getById(path);
  }

  async #getAll(path) {
    const arr = await this.#jsonLoader.load(path);//"https://dmitrybelkevich.github.io/app3/api/songs"
    
    return arr;
  }

  async #getById(path) {
    const arr = await this.#jsonLoader.load(path);//"https://dmitrybelkevich.github.io/app3/api/songs?id=1"
    
    const id = path.slice(path.indexOf("?id=") + "?id=".length);
    const obj = arr.find(obj => obj.id == id) || null;
    
    return obj;
  }
}
