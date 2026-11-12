import Song from '../../models/Song.js';
import Genre from '../../models/Genre.js';
import Chord from '../../models/Chord.js';

export default class GenreMapper {
  read(data) {
    if (!Array.isArray(data))
      return this.#createGenre(data);

    return this.#createGenres(data);
  }

  #createGenre(obj) {
    // TODO
    return null;
  }

  #createGenres(arr) {
    const genres = [];
    // const songs = new Map();

    for (const obj of arr) {
      const genre = new Genre();

      genre.id = obj.id;
      genre.title = obj.title;

      for (const s of obj.songs) {
        const song = new Song();

        song.id = s.id;
        song.band = s.band;
        song.title = s.title;
        song.tags.push(...s.tags || []);
        song.genre = genre;
        song.raiting = s.raiting;
        song.text = s.text;
        song.score = s.score;
        song.playback = s.playback;
        song.key = new Chord(s.key || "");
        song.transposition = s.transposition;

        // mapping
        genre.songs.push(song);

        // songs.set(s.id, song);
      }

      genres.push(genre);
    }
    
    return genres;
  }
}
