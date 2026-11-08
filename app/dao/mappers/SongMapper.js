import Song from '../../models/Song.js';
import Genre from '../../models/Genre.js';

export default class SongMapper {
  read(data) {
    if (!Array.isArray(data))
      return this.#map(data);
    
    // data.forEach((obj, index) => {
    //   data[index] = this.#map(obj);
    // });

    console.log(data);

    const genres = this.#createGenres(data);

    console.log(genres);

    return null;//data;
  }

  #createGenres(songs) {
    const map = new Map();

    let id = 1;
    for (const song of songs) {
      if (!map.has(song.genre)) {
        const genre = new Genre();

        genre.id = id++;
        genre.title = song.genre;
        // genre.songs = [];
        
        map.set(song.genre, genre);
      }
    }
    
    return map;
  }

  #map(obj) {
    const song = new Song();

    song.id = obj.id;
    song.band = obj.band;
    song.title = obj.title;
    
    const genre = new Genre();
    
    song.genre = genre;
    
    return song;
  }
}
