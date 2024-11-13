import {Container} from "inversify";
import {TypesMap} from "@/core/di/container.type";
import RemoteService from "@/core/data/datasource/remote/impl/remote-service";

const configure = (container: Container, types: TypesMap): void => {
  container.bind<RemoteService>(types.remoteService).to(RemoteService).inSingletonScope();
}

export default configure;
