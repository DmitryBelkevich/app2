import JsonLoader from '../loaders/JsonLoader.js';

export default class SongApiAdapter {
  #jsonLoader;
  
  constructor() {
    this.#jsonLoader = new JsonLoader();
  }
  
  async load(path) {//"https://dmitrybelkevich.github.io/app3/api/songs?id=1"
    const id = path.slice(path.indexOf("?id=") + "?id=".length);
    
    const arr = await this.#jsonLoader.load(path);
    const obj = arr.find(obj => obj.id == id) || null;
    
    return obj;
  }
}
