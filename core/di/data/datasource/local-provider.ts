import {Container} from "inversify";
import {TypesMap} from "@/core/di/container.type";
import {SQLiteService} from "@/core/data/datasource/local/impl/sqlite";
import LocalStorage from "@/core/data/datasource/local/impl/local-storage";

const configure = (container: Container, types: TypesMap): void => {
  container.bind<SQLiteService>(types.sqliteService).to(SQLiteService).inSingletonScope();
  container.bind<LocalStorage>(types.localStorage).to(LocalStorage).inSingletonScope();
}

export default configure;
