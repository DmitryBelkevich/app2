import ParamsService from '../services/ParamsService.js';

export default class Controller {
  #paramsService;
  
  constructor() {
    this.#paramsService = new ParamsService();
  }
  
  async init() {
    console.log("init");
  }
}
