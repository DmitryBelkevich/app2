import SongMapper from './SongMapper.js';

export default class SongsMapper {
  #songMapper = new SongMapper();
  
  read(arr) {
    arr.forEach(obj, index => {
      arr[index] = this.##songsMapper.read(obj);
    });
    
    return arr;
  }
}
