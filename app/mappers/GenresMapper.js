export default class GenresMapper {
  read(arr) {
    const set = new Set();
    arr.forEach(obj => set.add(obj.genre));
    console.log(set);
    
    return null;
  }
}
