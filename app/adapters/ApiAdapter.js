export default class ApiAdapter {
  load(path) {
    return path.replace("api/genres", "api/songs");
  }
}
