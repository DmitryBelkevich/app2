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
    const songs = await this.#loader.load("./songs.json");
    
    return songs;
  }
}

class SongView {
  constructor(songs) {
    const element = document.createElement('pre');
    element.textContent = JSON.stringify(songs, null, 2);
    
    document.body.appendChild(element);
  }
}

class SongController {
  #songDao;
  
  constructor() {
    this.#songDao = new SongDao();
  }
  
  async getAll(req, res) {
    const songs = await this.#songDao.getAll();
    
    new SongView(songs);
  }
}

function main() {
  const controller = new SongController();
  controller.getAll(null, null);
}

const app = main();
