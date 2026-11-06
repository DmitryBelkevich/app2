import Genre from '../models/Genre.js';

export default class GenresMapper {
  read(arr) {
    // 1
    const set = new Set();
    arr.forEach(obj => set.add(obj.genre));
    console.log(set);

    // 2
    let i = 1;
    set.forEach((obj, index) => {
      const genre = new Genre();
      set[index] = genre;
    });
    console.log(set);
    
    return null;
  }
}
