import {injectable} from "inversify";
import AuthRemoteDataSource from "@/core/data/datasource/remote/interface/auth-remote-data-source";
import {InvalidCredentialsError, InvalidSessionError} from "@/core/common/error/auth-error";

@injectable()
class RemoteService implements AuthRemoteDataSource {
  authenticated(token: number): Promise<number> {
    return new Promise((resolve, reject) => {
      if (token < Date.now() - 10000) {
        reject(new InvalidSessionError());
      } else if (token < Date.now()) {
        resolve(Date.now() + 60 * 1000);
      } else {
        resolve(token);
      }
    });
  }

  login(username: string, password: string): Promise<number> {
    return new Promise((resolve, reject) => {
      if (password.includes('wrong')) {
        reject(new InvalidCredentialsError());
      } else {
        resolve(Date.now() + 60 * 1000);
      }
    });
  }

  logout(_: number): Promise<void> {
    return Promise.resolve();
  }
}

export default RemoteService;
