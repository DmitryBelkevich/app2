import ParamsService from '../services/ParamsService.js';

export default class Controller {
  _paramsService;
  _params;
  
  constructor() {
    this._paramsService = new ParamsService();

    this._params = this._paramsService.getObject();
  }
  
  async init() {
    console.log("init");
  }
}
