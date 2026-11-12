import JsonLoader from '../../loaders/JsonLoader.js';

export default class GenreApiAdapter {
  #jsonLoader;
  
  constructor() {
    this.#jsonLoader = new JsonLoader();
  }
  
  async load(path) {// "https://dmitrybelkevich.github.io/app2/api/genres?id=1"
    // path = path.replace("api/genres", "api/songs");
    return null;
  }
}
