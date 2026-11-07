import JsonLoader from '../loaders/JsonLoader.js';

export default class ApiAdapter {
  #jsonLoader;
  
  constructor() {
    this.#jsonLoader = new JsonLoader();
  }
  
  async load(path) {
    const result = path.replace("api/genres", "api/songs");
    return [];
  }
}
