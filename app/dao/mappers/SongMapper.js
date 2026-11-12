import Config from '../../config/Config.js';

import Song from '../../models/Song.js';
import Genre from '../../models/Genre.js';

export default class SongMapper {
  read(data) {
    if (!Array.isArray(data))
      return this.#createSong(data);

    return this.#createSongs(data);
  }

  #createSong(obj) {
    const song = new Song();

    song.id = obj.id;
    song.band = obj.band;
    song.title = obj.title;
    song.tags.push(...obj.tags || []);
    
    const genre = new Genre();
      genre.id = 1;
      genre.title = obj.genre;
    
    song.genre = genre;
    song.genre.songs.push(song);

    song.raiting = obj.raiting;
    song.text = Config.STORAGE + obj.text;
    song.score = obj.score;
    song.playback = obj.playback;
    
    return song;
  }

  #createSongs(arr) {
    const songs = [];
    const genres = new Map();

    let id = 1;
    for (const obj of arr) {
      const song = new Song();
      
      song.id = obj.id;
      song.band = obj.band;
      song.title = obj.title;
      song.tags.push(...obj.tags || []);

      if (!genres.has(obj.genre)) {
        const genre = new Genre();
        
        genre.id = id++;
        genre.title = obj.genre;
        
        genres.set(obj.genre, genre);
      }
      
      song.genre = genres.get(obj.genre);
      song.genre.songs.push(song);
      
      song.raiting = obj.raiting;
      song.text = Config.STORAGE + obj.text;
      song.score = obj.score;
      song.playback = obj.playback;
      
      songs.push(song);
    }
    
    return songs;
  }
}
