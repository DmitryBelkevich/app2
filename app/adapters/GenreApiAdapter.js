import JsonLoader from '../loaders/JsonLoader.js';

export default class GenreApiAdapter {
  #jsonLoader;
  
  constructor() {
    this.#jsonLoader = new JsonLoader();
  }
  
  async load(path) {// "https://dmitrybelkevich.github.io/app3/api/genres?id=1"
    // const result = path.replace("api/genres", "api/songs");
    return null;
  }
}
