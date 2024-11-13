import {inject, injectable} from "inversify";
import {Types} from "@/core/di/container.type";
import TodoRepository from "@/core/domain/repository/todo-repository";
import TodoLocalDataSource from "@/core/data/datasource/local/interface/todo-local-data-source";
import {TodoEntity} from "@/core/domain/entity/todo-entity";

@injectable()
class TodoRepositoryImpl implements TodoRepository {
  @inject(Types.todoLocalDataSource) private local!: TodoLocalDataSource;

  fetchAllTodosFromLocal(): Promise<TodoEntity[]> {
    return this.local.fetchAllTodos();
  }
}

export default TodoRepositoryImpl;
