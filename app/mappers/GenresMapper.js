import Genre from '../models/Genre.js';

export default class GenresMapper {
  read(arr) {
    const genres = this.createGenres(arr);
    
    return genres;
  }

  createGenres(arr) {
    const map = new Map();

    let i = 1;
    arr.forEach(obj => {
      if (!map.has(obj.genre)) {
        const genre = new Genre()
        
        genre.id = i++;
        genre.title = obj.genre;
        
        map.set(obj.genre, genre);
      }
    });
    
    return map;
  }
}
