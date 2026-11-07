import JsonLoader from '../loaders/JsonLoader.js';

export default class GenresApiAdapter {
  #jsonLoader;
  
  constructor() {
    this.#jsonLoader = new JsonLoader();
  }
  
  async load(path) {// "https://dmitrybelkevich.github.io/app3/api/genres
    path = path.replace("api/genres", "api/songs");
    console.log(path);
    
    return [];
  }
}
