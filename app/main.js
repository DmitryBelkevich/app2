// import JsonLoader from '../libs/loaders/JsonLoader.js';

// async function main() {
//   const loader = new JsonLoader();

//   const data = await loader.load("api/songs");
//   console.log(data);
// }

async function load() {
  try {
    const response = await fetch('https://dmitrybelkevich.github.io/app2/api/songs');
    
    // Проверяем статус ответа (200-299)
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    
    const data = await response.text(); // Читаем тело ответа как JSON
    return data;
  } catch (error) {
    console.error('Ошибка при запросе:', error);
  }
}

function main() {
  const data = load();
  console.log(data);
}

const app = main();
