import Song from '../models/Song.js';

export default class SongsMapper {
  read(arr) {
    arr.forEach(obj, index => {
      const song = new Song();

      song.id = obj.id;
      song.title = obj.title;

      arr[index] = song;
    });
    
    return arr;
  }
}
