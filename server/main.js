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
    this.#loader = JsonLoader();
  }
  
  async getAll() {
    const songs = await this.#loader.load("./server/songs.json");

    console.log(songs);
    
    return null;
  }
}

class SongController {
  #songDao;

  constructor() {
    this.#songDao = new SongDao()
  }
  
  getAll(req, res) {
    const songs = this.#songDao.getAll();

    // null — пропускаем функцию-фильтр
    // 2 — количество пробелов для отступа (табуляции)
    const jsonString = JSON.stringify(songs, null, 2);
    
    // Безопасно выводим текст на страницу
    const element = document.createElement('pre');
    element.textContent = jsonString;
    
    document.body.appendChild(element);
  }
}

function main() {
  const controller = new SongController();
  controller.getAll(null, null);
}

const app = main();
