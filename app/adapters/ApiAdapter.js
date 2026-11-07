export default class ApiAdapter {
  async load(path) {
    const result = path.replace("api/genres", "api/songs");
    return null;
  }
}
