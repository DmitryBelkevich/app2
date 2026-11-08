import GenreBuilder from '../../builders/GenreBuilder.js';

export default class GenreMapper {
  read(data) {
    if (!Array.isArray(data))
      return this.#map(data);
    
    data.forEach((obj, index) => {
      data[index] = this.#map(obj);
    });

    return data;
  }

  #map(obj) {
    const genre = new GenreBuilder()
      .buildId(obj.id)
      .buildTitle(obj.title)
      .build();
    
    return genre;
  }
}
