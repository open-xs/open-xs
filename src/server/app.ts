import { Sequelize } from 'sequelize';
import Config from './config';
import * as express from "express";


export default class App {
  protected _config: Config;
  protected _db: Sequelize;
  protected _router: express.Express;
  constructor() {
    console.log('Starting a new server');
    this._router = express();
    this._config = Config.load();
    this._db = new Sequelize(
      this._config.database.name,
      this._config.database.user,
      this._config.database.password, {
        host: this._config.database.host,
        dialect: this._config.database.dialect
      }
    );
  }
  listen(port: number=8080) {
    this._router.listen(port, function() {
      console.log('Server is ready');
    });
  }
}