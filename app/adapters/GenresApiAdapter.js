import JsonLoader from '../loaders/JsonLoader.js';

export default class GenresApiAdapter {
  #jsonLoader;
  
  constructor() {
    this.#jsonLoader = new JsonLoader();
  }
  
  async load(path) {
    path = path.replace("api/genres", "api/songs");// "https://dmitrybelkevich.github.io/app3/api/songs

    const songs = await this.#jsonLoader.load(path);
    
    const genres = this.#createGenres(songs);
    console.log(genres);
    
    return [];
  }

  #createGenres(songs) {
    const map = new Map();
    
    songs.forEach(song => {
      const genre = {};
      genre.title = song.genre;
      map.set(song.genre, genre);
    });
    
    return Array.from(map.values());
  }
}
