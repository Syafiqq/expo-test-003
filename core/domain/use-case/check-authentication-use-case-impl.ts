import CheckAuthenticationUseCase from "@/core/domain/use-case/check-authentication-use-case";
import {inject, injectable} from "inversify";
import {Types} from "@/core/di/container.type";
import AuthRepository from "@/core/domain/repository/auth-repository";

@injectable()
class CheckAuthenticationUseCaseImpl implements CheckAuthenticationUseCase {
  @inject(Types.authRepository) private authRepository!: AuthRepository;

  async execute(): Promise<number> {
    const token = await this.authRepository.authTokenFromCache();
    const newToken = await this.authRepository.authenticatedFromRemote(token);
    if (newToken !== token) {
      await this.authRepository.setAuthTokenToCache(newToken);
    }
    return newToken;
  }
}

export default CheckAuthenticationUseCaseImpl;
