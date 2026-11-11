export default class SongView {
  constructor() {
    console.log(this);

    for (let i = 0; i < 1000; i++) {
      document.body.textContent += i;
    }
  }
}
