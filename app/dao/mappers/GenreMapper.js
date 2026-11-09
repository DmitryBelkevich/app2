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

    for (const obj of arr) {
      const genre = new Genre();

      genres.push(genre);
    }
    
    console.log(arr);
    console.log(genres);
    
    return genres;
  }
}
