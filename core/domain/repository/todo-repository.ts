import {TodoEntity} from "@/core/domain/entity/todo-entity";

interface TodoRepository {
  // local
  fetchAllTodosFromLocal(): Promise<TodoEntity[]>;
}

export default TodoRepository;
