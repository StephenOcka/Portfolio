import { connection } from "./controllers/connection.js";
export class dataBase {
  static pages = class {
    static home = connection.connect("/./assets/app/home/home.json");
  };
  static modules = class {
    static author = connection.connect("/./assets/modules/json/author.json");
  };
}
