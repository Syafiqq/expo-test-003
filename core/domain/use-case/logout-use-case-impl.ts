import {inject, injectable} from "inversify";
import {Types} from "@/core/di/container.type";
import AuthRepository from "@/core/domain/repository/auth-repository";
import LogoutUseCase from "@/core/domain/use-case/logout-use-case";

@injectable()
class LogoutUseCaseImpl implements LogoutUseCase {
  @inject(Types.authRepository) private authRepository!: AuthRepository;

  async execute(token: number): Promise<void> {
    try {
      await this.authRepository.logoutFromRemote(token);
    } catch {
    } finally {
      await this.authRepository.setAuthTokenToCache(undefined);
    }
  }
}

export default LogoutUseCaseImpl;
