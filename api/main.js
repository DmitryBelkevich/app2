import JsonLoader from '../libs/loaders/JsonLoader.js';

class SongDao {
  #loader;
  
  constructor() {
    this.#loader = new JsonLoader();
  }
  
  async getAll() {
    const songs = await this.#loader.load("../database/songs.json");
    
    return songs;
  }

  async getById(id) {
    const songs = await this.#loader.load("../database/songs.json");

    const song = songs.find(song => song.id == id) || null;
    
    return song;
  }
}

class SongView {
  constructor(data) {
    const element = document.createElement('pre');
    element.textContent = JSON.stringify(data, null, 2);
    
    document.body.appendChild(element);
  }
}

class SongController {
  #songDao;
  
  constructor() {
    this.#songDao = new SongDao();
  }

  // GET /api/songs
  async getAll() {
    const songs = await this.#songDao.getAll();
    
    new SongView(songs);
  }

  // GET /api/songs?id=:id
  async getById(id) {
    const song = await this.#songDao.getById(id);
    
    new SongView(song);
  }
}

function main() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  
  const controller = new SongController();

  if (!id)
    controller.getAll();
  else if (id)
    controller.getById(id);
}

const app = main();
