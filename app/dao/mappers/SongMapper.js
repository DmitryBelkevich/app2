import Song from '../../models/Song.js';
import Genre from '../../models/Genre.js';

export default class SongMapper {
  read(data) {
    // if (!Array.isArray(data))
    //   return this.#map(data);
    
    // data.forEach((obj, index) => {
    //   data[index] = this.#map(obj);
    // });

    console.log(data);

    const songs = this.#createSongs(data);
    console.log(songs);

    const genres = this.#createGenres(data);
    console.log(genres);

    return null;//data;
  }

  #createSongs(arr) {
    const songs = [];
    
    for (const obj of arr) {
      const song = new Song();

      return song;
    }
    
    return songs;
  }

  #createGenres(songs) {
    const genres = new Map();

    let id = 1;
    for (const song of songs) {
      if (!genres.has(song.genre)) {
        const genre = new Genre();

        genre.id = id++;
        genre.title = song.genre;
        // genre.songs = [];
        
        genres.set(song.genre, genre);
      }
    }

    // fill genre.songs
    for (const song of songs) {
      const genre = genres.get(song.genre);
      genre.songs.push(song);
    }
    
    return Array.from(genres.values());
  }

  // #map(obj) {
  //   const song = new Song();

  //   song.id = obj.id;
  //   song.band = obj.band;
  //   song.title = obj.title;
    
  //   const genre = new Genre();
    
  //   song.genre = genre;
    
  //   return song;
  // }
}
