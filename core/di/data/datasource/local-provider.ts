import {Container} from "inversify";
import {TypesMap} from "@/core/di/container.type";
import {SQLiteService} from "@/core/data/datasource/local/impl/sqlite";
import LocalStorage from "@/core/data/datasource/local/impl/local-storage";
import TodoLocalDataSource from "@/core/data/datasource/local/interface/todo-local-data-source";

const configure = (container: Container, types: TypesMap): void => {
  container.bind<SQLiteService>(types.sqliteService).to(SQLiteService).inSingletonScope();
  container.bind<LocalStorage>(types.localStorage).to(LocalStorage).inSingletonScope();
  container.bind<TodoLocalDataSource>(types.todoLocalDataSource).toService(types.localStorage);
}

export default configure;
