import JsonLoader from '../loaders/JsonLoader.js';

export default class SongApiAdapter {
  #jsonLoader;
  
  constructor() {
    this.#jsonLoader = new JsonLoader();
  }
  
  async load(path) {//"https://dmitrybelkevich.github.io/app3/api/songs?id=1"
    const id = path.slice(path.indexOf("?id=") + "?id=".length);
    
    const songs = await this.#jsonLoader.load(path);
    const song = songs.find(song => song.id == id) || null;
    
    return song;
  }
}
