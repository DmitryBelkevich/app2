import Song from '../models/Song.js';

export default class SongMapper {
  read(obj) {
    if (!obj)
      return null;
    
    const song = new Song();

    song.id = obj.id;
    song.title = obj.title;
    song.band = obj.band;
    
    return song;
  }
}
