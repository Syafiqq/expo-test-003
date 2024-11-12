import {inject, injectable} from "inversify";
import {Types} from "@/core/di/container.type";
import {SQLiteService} from "@/core/data/datasource/local/impl/sqlite";
import TodoLocalDataSource from "@/core/data/datasource/local/interface/todo-local-data-source";
import {TodoEntity} from "@/core/domain/entity/todo-entity";

@injectable()
class LocalStorage implements TodoLocalDataSource {
  @inject(Types.sqliteService) private storage!: SQLiteService;

  async fetchAllTodos(): Promise<TodoEntity[]> {
    const db = await this.storage.getDb();
    return db.getAllAsync('SELECT * FROM todos');
  }
}

export default LocalStorage;
