import {useInjection} from "inversify-react";
import {Types} from "@/core/di/container.type";
import CheckAuthenticationUseCase from "@/core/domain/use-case/check-authentication-use-case";
import {useQuery} from "@tanstack/react-query";
import TodoRepository from "@/core/domain/repository/todo-repository";


export function useTodosQuery() {
  const checkAuthUseCase = useInjection<CheckAuthenticationUseCase>(Types.checkAuthenticationUseCase)
  const todoRepository = useInjection<TodoRepository>(Types.todoRepository)

  return useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      return checkAuthUseCase.execute()
        .then(() => todoRepository.fetchAllTodosFromLocal())
    },
  });
}
