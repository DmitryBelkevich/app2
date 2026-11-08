import Song from '../../models/Song.js';

export default class SongMapper {
  read(data) {
    if (!Array.isArray(data))
      return this.#map(data);
    
    data.forEach((obj, index) => {
      data[index] = this.#map(obj);
    });

    return data;
  }

  #map(obj) {
    const song = new Song();

    song.id = obj.id;
    song.band = obj.band;
    song.title = obj.title;
    
    return song;
  }
}
