import JsonLoader from '../loaders/JsonLoader.js';

export default class GenresApiAdapter {
  #jsonLoader;
  
  constructor() {
    this.#jsonLoader = new JsonLoader();
  }
  
  async load(path) {
    path = path.replace("api/genres", "api/songs");// "https://dmitrybelkevich.github.io/app3/api/songs

    const arr = await this.#jsonLoader.load(path);
    
    const arr = this.#createGenresarr(arr);
    console.log(arr2);
    
    return [];
  }

  #createGenresarr(arr) {
    const set = new Set();
    
    arr.forEach(obj => set.push(obj.genre));
    
    return set;
  }
}
