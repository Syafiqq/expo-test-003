import {useInjection} from "inversify-react";
import {useMutation} from '@tanstack/react-query';
import {Types} from "@/core/di/container.type";
import LoginUseCase from "@/core/domain/use-case/login-use-case";
import {InvalidCredentialsError} from "@/core/common/error/auth-error";
import {CompletableError} from "@/core/common/error/presenter-error";
import {UnknownError} from "@/core/common/error/uncommon-error";
import AuthRepository from "@/core/domain/repository/auth-repository";


export function useLoginQuery() {
  const useCase = useInjection<LoginUseCase>(Types.loginUseCase)
  const authRepository = useInjection<AuthRepository>(Types.authRepository)

  return useMutation({
    mutationFn: async ({username, password}: { username: string, password: string }) => {
      try {
        await useCase.execute(username, password)
        return authRepository.authTokenFromCache()
      } catch (error) {
        if (error instanceof InvalidCredentialsError) {
          throw new CompletableError(undefined, error)
        } else if (error instanceof Error) {
          throw new CompletableError(undefined, error)
        } else {
          throw new CompletableError(undefined, new UnknownError())
        }
      }
    }
  });
}
