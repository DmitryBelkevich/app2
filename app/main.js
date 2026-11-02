import JsonLoader from '../libs/loaders/JsonLoader.js';

function main() {
  const loader = new JsonLoader();

  const data = await loader.load("./database/songs.json");
  console.log(data);
}

const app = main();
