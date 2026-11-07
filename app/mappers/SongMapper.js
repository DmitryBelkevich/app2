import SongBuilder from '../builders/SongBuilder.js';

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
    const song = new SongBuilder().build();
    
    return song;
  }
}
