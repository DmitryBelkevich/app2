import JsonLoader from '../libs/loaders/JsonLoader.js';

async function main() {
  const loader = new JsonLoader();

  const data = await loader.load("app2/api/songs");
  console.log(data);
}

const app = main();
