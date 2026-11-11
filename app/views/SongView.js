export default class SongView {
  constructor() {
    console.log(this);

    for (let i = 0; i < 1000; i++) {
      const div = document.createElement("div");
      div.textContent = i;
      document.body.append(div);
    }
  }
}
