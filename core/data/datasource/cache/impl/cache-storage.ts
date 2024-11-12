import {MMKV} from "react-native-mmkv";
import {inject, injectable} from "inversify";
import {Types} from "@/core/di/container.type";

@injectable()
class CacheStorage {
  @inject(Types.mmkv) private storage!: MMKV;
}

export default CacheStorage;
