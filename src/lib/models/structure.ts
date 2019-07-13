import * as fs from "fs";



export default class Model {
  protected static repository: Map<String, Model> = new Map<string, Model>();
  public name: string;
  public tableName: string;
  
  constructor(name: string) {
    this.name = name;
  }
  public static get(model: string): Model {
    if (!this.repository.has(model)) {
      this.repository.set(model, new Model(model));
    }
    return this.repository.get(model);
  }
  public static load(filename: string): Model {
    let config:Buffer = fs.readFileSync(filename);
    let data:any = JSON.parse(config.toString());
    let model = this.get(data.name);
    return model;
  }
  public extends(filename: string): void {

  }
}