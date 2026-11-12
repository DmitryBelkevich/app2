import JsonLoader from '../../loaders/JsonLoader.js';

export default class SongsApiAdapter {
  #jsonLoader;
  
  constructor() {
    this.#jsonLoader = new JsonLoader();
  }

  async load(path) {//"https://dmitrybelkevich.github.io/app3/api/songs"
    const songs = await this.#jsonLoader.load(path);
    
    return songs;
  }
}
