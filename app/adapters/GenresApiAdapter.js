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

    let i = 1;
    for (const song of songs) {
      if (map.has(song.genre))
        continue;

      const genre = {};

      genre.id = i++;
      genre.title = song.genre;
      genre.songs = [];
      
      map.set(song.genre, genre);
    }
    
    return Array.from(map.values());
  }
}
