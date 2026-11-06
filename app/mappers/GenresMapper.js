import Genre from '../models/Genre.js';

export default class GenresMapper {
  read(arr) {
    // 1
    const set = new Set();
    arr.forEach(obj => set.add(obj.genre));
    console.log(set);

    // 2
    const arr2 = Array.from(set);
    let i = 1;
    arr2.forEach((obj, index) => {
      const genre = new Genre();
      genre.id = i++;

      arr2[index] = genre;
    });
    console.log(arr2);
    
    return null;
  }
}
