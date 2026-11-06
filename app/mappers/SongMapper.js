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
    
    song.genre = new Genre();
    song.genre.title = obj.genre;
    
    return song;
  }
}
