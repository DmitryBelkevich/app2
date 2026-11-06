import Song from '../models/Song.js';
import Genre from '../models/Genre.js';

export default class SongMapper {
  read(obj) {
    if (!obj)
      return null;
    
    const song = new Song();

    song.id = obj.id;
    song.title = obj.title;
    song.band = obj.band;
    
    song.genre = this.#createGenre(obj);
    
    return song;
  }

  #index;

  #createGenre(obj) {
    const genre = new Genre();

    genre.id = this.#index++;
    genre.title = obj.genre;
    
    return genre;
  }
}
