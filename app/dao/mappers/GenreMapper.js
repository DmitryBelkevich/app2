import Song from '../../models/Song.js';
import Genre from '../../models/Genre.js';

export default class GenreMapper {
  read(data) {
    if (!Array.isArray(data))
      return this.#createGenre(data);

    return this.#createGenres(data);
  }

  #createGenre(obj) {
    // TODO
    return null;
  }

  #createGenres(arr) {
    const genres = [];
    // const songs = new Map();

    for (const obj of arr) {
      const genre = new Genre();

      genre.id = obj.id;
      genre.title = obj.title;

      for (const s of obj.songs) {
        const song = new Song();

        song.id = s.id;
        song.band = s.band;
        song.title = s.title;
        song.genre = genre;
        song.raiting = s.raiting;

        // mapping
        genre.songs.push(song);

        // songs.set(s.id, song);
      }

      genres.push(genre);
    }
    
    return genres;
  }
}
