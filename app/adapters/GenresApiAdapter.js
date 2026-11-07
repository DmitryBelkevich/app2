import JsonLoader from '../loaders/JsonLoader.js';

export default class GenresApiAdapter {
  #jsonLoader;
  
  constructor() {
    this.#jsonLoader = new JsonLoader();
  }
  
  async load(path) {
    // const result = path.replace("api/genres", "api/songs");
    return null;
  }
}
