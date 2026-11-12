import Config from '../../config/Config.js';

import JsonLoader from '../../loaders/JsonLoader.js';

export default class SongsApiAdapter {
  #jsonLoader;
  
  constructor() {
    this.#jsonLoader = new JsonLoader();
  }

  async load(path) {
    const songs = await this.#jsonLoader.load(path);

    for (const song of songs)
      song.text = Config.STORAGE + song.text;
    
    return songs;
  }
}
