import {Container} from "inversify";
import {TypesMap} from "@/core/di/container.type";
import {SQLiteService} from "@/core/data/datasource/local/impl/sqlite";

const configure = (container: Container, types: TypesMap): void => {
  container.bind<SQLiteService>(types.sqliteService).to(SQLiteService).inSingletonScope();
}

export default configure;
