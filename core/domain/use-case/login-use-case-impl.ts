import {inject, injectable} from "inversify";
import {Types} from "@/core/di/container.type";
import AuthRepository from "@/core/domain/repository/auth-repository";
import LoginUseCase from "@/core/domain/use-case/login-use-case";

@injectable()
class LoginUseCaseImpl implements LoginUseCase {
  @inject(Types.authRepository) private authRepository!: AuthRepository;

  async execute(username: string, password: string): Promise<void> {
    const token = await this.authRepository.loginFromRemote(username, password);
    await this.authRepository.setAuthTokenToCache(token);
  }
}

export default LoginUseCaseImpl;
