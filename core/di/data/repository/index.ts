import {Container} from "inversify";
import {TypesMap} from "@/core/di/container.type";
import AuthRepository from "@/core/domain/repository/auth-repository";
import AuthRepositoryImpl from "@/core/data/repository/auth-repository-impl";

const configure = (container: Container, types: TypesMap): void => {
  container.bind<AuthRepository>(types.authRepository).to(AuthRepositoryImpl).inSingletonScope();
}

export default configure;
