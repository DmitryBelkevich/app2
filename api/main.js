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
    console.log("get ALL");
    
    const songs = { id: 1, title: "aaa" };
    
    const response = Response.json(songs, {
      status: 201,
      statusText: "OK",
      headers: {
        "Content-Type": "application/json"
      }
    });

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
