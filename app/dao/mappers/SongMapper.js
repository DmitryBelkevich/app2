import Song from '../../models/Song.js';
import Genre from '../../models/Genre.js';

export default class SongMapper {
  read(data) {
    if (!Array.isArray(data))
      return this.#map(data);
    
    // data.forEach((obj, index) => {
    //   data[index] = this.#map(obj);
    // });

    return null;//data;
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
