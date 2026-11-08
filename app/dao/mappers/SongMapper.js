import SongBuilder from '../../models/builders/SongBuilder.js';

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
    const song = new SongBuilder()
      .buildId(obj.id)
      .buildBand(obj.band)
      .buildTitle(obj.title)
      .build();
    
    return song;
  }
}
