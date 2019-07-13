import * as fs from 'fs';
import { Dialect } from 'sequelize';

interface Database {
  name: string;
  dialect: Dialect;
  host: string;
  user: string;
  password: string;
}

export default class Config {
  public database: Database;
  public static load(filename: string = 'config.json'): Config {
    let config:Buffer = fs.readFileSync(filename);
    return JSON.parse(config.toString());
  }
}