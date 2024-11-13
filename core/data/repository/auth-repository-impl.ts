import {inject, injectable} from "inversify";
import {Types} from "@/core/di/container.type";
import AuthRepository from "@/core/domain/repository/auth-repository";
import AuthCacheDataSource from "@/core/data/datasource/cache/interface/auth-cache-data-source";
import AuthRemoteDataSource from "@/core/data/datasource/remote/interface/auth-remote-data-source";

@injectable()
class AuthRepositoryImpl implements AuthRepository {
  @inject(Types.authCacheDataSource) private cache!: AuthCacheDataSource;
  @inject(Types.authRemoteDataSource) private remote!: AuthRemoteDataSource;

  authTokenFromCache(): Promise<number> {
    return this.cache.authToken();
  }

  setAuthTokenToCache(token: number | undefined): Promise<void> {
    return this.cache.setAuthToken(token);
  }

  authenticatedFromRemote(token: number): Promise<number> {
    return this.remote.authenticated(token);
  }

  loginFromRemote(username: string, password: string): Promise<number> {
    return this.remote.login(username, password);
  }

  logoutFromRemote(token: number): Promise<void> {
    return this.remote.logout(token);
  }
}

export default AuthRepositoryImpl;
