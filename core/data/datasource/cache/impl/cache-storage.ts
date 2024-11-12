import {MMKV} from "react-native-mmkv";
import {inject, injectable} from "inversify";
import {Types} from "@/core/di/container.type";
import AuthCacheDataSource from "@/core/data/datasource/cache/interface/auth-cache-data-source";
import {InvalidSessionError} from "@/core/common/error/auth-error";

@injectable()
class CacheStorage implements AuthCacheDataSource {
  @inject(Types.mmkv) private storage!: MMKV;

  async authToken(): Promise<number> {
    return new Promise(async (resolve, reject) => {
      const token = this.storage.getNumber('login_token');
      const now = new Date().getTime();
      if (!token) {
        reject(new InvalidSessionError());
      } else if (token < now) {
        reject(new InvalidSessionError());
      } else {
        resolve(token);
      }
    })
  }

  async setAuthToken(token: number | undefined): Promise<void> {
    if (!token) {
      this.storage.delete('login_token');
      return;
    }
    this.storage.set('login_token', token);
  }
}

export default CacheStorage;
