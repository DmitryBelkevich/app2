import ParamsService from '../services/ParamsService.js';

export default class Controller {
  _paramsService;
  
  constructor() {
    this._paramsService = new ParamsService();
  }
  
  async init() {
    console.log("init");
  }
}
