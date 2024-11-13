import {Container} from "inversify";
import {TypesMap} from "@/core/di/container.type";
import RemoteService from "@/core/data/datasource/remote/impl/remote-service";
import AuthRemoteDataSource from "@/core/data/datasource/remote/interface/auth-remote-data-source";

const configure = (container: Container, types: TypesMap): void => {
  container.bind<RemoteService>(types.remoteService).to(RemoteService).inSingletonScope();
  container.bind<AuthRemoteDataSource>(types.authRemoteDataSource).toService(types.remoteService);
}

export default configure;
