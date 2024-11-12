import {TodoEntity} from "@/core/domain/entity/todo-entity";

interface TodoLocalDataSource {
  fetchAllTodos(): Promise<TodoEntity[]>;
}

export default TodoLocalDataSource;
