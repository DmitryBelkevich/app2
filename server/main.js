const song = {
  id: 1,
  title: "Song",
  band: "Band"
};

// null — пропускаем функцию-фильтр
// 4 — количество пробелов для отступа (табуляции)
const jsonString = JSON.stringify(song, null, 2);

// Безопасно выводим текст на страницу
const element = document.createElement('pre');
element.textContent = jsonString;

document.body.appendChild(element);
