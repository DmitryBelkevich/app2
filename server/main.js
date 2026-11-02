const songs = [
  {
    id: 1,
    title: "Song 1",
    band: "Band"
  },
  {
    id: 2,
    title: "Song 1",
    band: "Band"
  }
];

class SongDao {
  getAll() {
    return songs;
  }
}

class Controller {
  getAll(req, res) {
    const songDao = new SongDao();
    const songs = songDao.getAll();

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
  const controller = new Controller();
  controller.getAll(null, null);
}

const app = main();
