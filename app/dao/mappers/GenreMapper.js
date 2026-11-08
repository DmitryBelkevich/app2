import Genre from '../../models/Genre.js';

export default class GenreMapper {
  read(data) {
    if (!Array.isArray(data))
      return this.#map(data);
    
    data.forEach((obj, index) => {
      data[index] = this.#map(obj);
    });

    return data;
  }

  #map(obj) {
    const genre = new Genre()

    genre.id = obj.id;
    genre.title = obj.title;
    
    return genre;
  }
}
