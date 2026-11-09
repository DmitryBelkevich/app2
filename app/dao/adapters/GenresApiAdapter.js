import JsonLoader from '../../loaders/JsonLoader.js';

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
    
    return genres;
  }

  #createGenres(songs) {
    const genres = new Map();

    let id = 1;
    for (const song of songs) {
      if (!genres.has(song.genre)) {
        const genre = {};

        genre.id = id++;
        genre.title = song.genre;
        genre.songs = [];
        
        genres.set(song.genre, genre);
      }

      // mapping
      // const genre = genres.get(song.genre);// TODO
      // genre.songs.push(song);// fill genre.songs
    }
    
    return Array.from(genres.values());
  }
}
