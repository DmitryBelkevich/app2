import Song from '../models/Song.js';
import SongsMapper from './SongsMapper.js';

export default class SongsMapper {
  #songsMapper = new SongsMapper();
  
  read(arr) {
    arr.forEach(obj, index => {
      arr[index] = this.##songsMapper.read(obj);;
    });
    
    return arr;
  }
}
