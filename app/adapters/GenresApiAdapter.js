import JsonLoader from '../loaders/JsonLoader.js';

export default class GenresApiAdapter {
  #jsonLoader;
  
  constructor() {
    this.#jsonLoader = new JsonLoader();
  }
  
  async load(path) {
    path = path.replace("api/genres", "api/songs");// "https://dmitrybelkevich.github.io/app3/api/songs

    const arr = await this.#jsonLoader.load(path);
    
    const genres = this.#createGenresarr(arr);
    console.log(genres);
    
    return [];
  }

  #createGenresarr(songs) {
    const map = new Map();
    
    songs.forEach(song => {
      const genre = {};
      genre.title = song.genre;
      map.set(song.genre, genre);
    });
    
    return Array.from(map.values());
  }
}
