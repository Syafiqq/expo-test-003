import {Container} from "inversify";
import {TypesMap} from "@/core/di/container.type";
import {storage} from "@/core/data/datasource/cache/impl/mmkv";
import {MMKV} from "react-native-mmkv";
import CacheStorage from "@/core/data/datasource/cache/impl/cache-storage";
import AuthCacheDataSource from "@/core/data/datasource/cache/interface/auth-cache-data-source";

const configure = (container: Container, types: TypesMap): void => {
  container.bind<MMKV>(types.mmkv).toConstantValue(storage);
  container.bind<CacheStorage>(types.cacheStorage).to(CacheStorage).inSingletonScope();
  container.bind<AuthCacheDataSource>(types.authCacheDataSource).toService(types.cacheStorage);
}

export default configure;
