import {inject, injectable} from "inversify";
import {Types} from "@/core/di/container.type";
import {SQLiteService} from "@/core/data/datasource/local/impl/sqlite";

@injectable()
class LocalStorage {
  @inject(Types.sqliteService) private storage!: SQLiteService;
}

export default LocalStorage;
