function main() {
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
  
  // null — пропускаем функцию-фильтр
  // 4 — количество пробелов для отступа (табуляции)
  const jsonString = JSON.stringify(songs, null, 2);
  
  // Безопасно выводим текст на страницу
  const element = document.createElement('pre');
  element.textContent = jsonString;
  
  document.body.appendChild(element);
}

const app = main();
