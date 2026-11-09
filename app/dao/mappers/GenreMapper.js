import Genre from '../../models/Genre.js';

export default class GenreMapper {
  read(data) {
    if (!Array.isArray(data))
      return this.#createGenre(data);

    return this.#createGenres(data);
  }

  #createGenre(obj) {
    return null;
  }

  #createGenres(arr) {
    console.log(arr);
    
    return [];
  }
}
