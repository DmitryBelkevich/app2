import JsonLoader from '../../loaders/JsonLoader.js';

export default class SongApiAdapter {
  #jsonLoader;
  
  constructor() {
    this.#jsonLoader = new JsonLoader();
  }
  
  async load(path) {//"https://dmitrybelkevich.github.io/app3/api/songs?id=1"
    const id = this.#getId(path);
    
    const songs = await this.#jsonLoader.load(path);

    for (const song of songs)
      song.text = Config.STORAGE + song.text;
    
    const song = songs.find(song => song.id == id) || null;
    
    return song;
  }

  #getId(path) {
    const id = path.slice(path.indexOf("?id=") + "?id=".length);
    return id;
  }
}
