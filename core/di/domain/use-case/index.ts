import {Container} from "inversify";
import {TypesMap} from "@/core/di/container.type";
import CheckAuthenticationUseCase from "@/core/domain/use-case/check-authentication-use-case";
import CheckAuthenticationUseCaseImpl from "@/core/domain/use-case/check-authentication-use-case-impl";
import LoginUseCase from "@/core/domain/use-case/login-use-case";
import LoginUseCaseImpl from "@/core/domain/use-case/login-use-case-impl";

const configure = (container: Container, types: TypesMap): void => {
  container.bind<CheckAuthenticationUseCase>(types.checkAuthenticationUseCase).to(CheckAuthenticationUseCaseImpl);
  container.bind<LoginUseCase>(types.loginUseCase).to(LoginUseCaseImpl);
}

export default configure;
