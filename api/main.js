import SongDao from './dao/SongDao.js';

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
  // async getAll() {
  //   const songs = await this.#songDao.getAll();
    
  //   new SongView(songs);
  // }
  
  async getAll() {
    try {
      // 1. Wait for the server headers and response status
      const response = await fetch("../database/songs.json");
      
      // 2. Check if the HTTP status code is successful (200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      // 3. Wait for the full body data to download and parse as JSON
      const data = await response.json();

      console.log(data);
      
      // new SongView(data);
      // Создает готовый Response с Content-Type: application/json
      const response = Response.json(data, { status: 200 });
    } catch (error) {
      // 4. Handle network errors or parsing issues
      console.error('Fetch failed:', error);
    }
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
