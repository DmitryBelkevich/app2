class JsonLoader {
  async load(path) {
    try {
      // 1. Wait for the server headers and response status
      const response = await fetch(path);
      
      // 2. Check if the HTTP status code is successful (200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      // 3. Wait for the full body data to download and parse as JSON
      const data = await response.json();
      
      return data;
    } catch (error) {
      // 4. Handle network errors or parsing issues
      console.error('Fetch failed:', error);
    }
  }
}

class SongDao {
  #loader;
  
  constructor() {
    this.#loader = new JsonLoader();
  }
  
  async getAll() {
    const songs = await this.#loader.load("./database/songs.json");
    
    return songs;
  }

  async getById(id) {
    const songs = await this.#loader.load("./database/songs.json");

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
