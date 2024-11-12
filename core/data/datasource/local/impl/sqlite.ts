import {injectable} from 'inversify';
import * as SQLite from 'expo-sqlite';
import constants from './sqlite.constants';

@injectable()
export class SQLiteService {
  private db?: SQLite.SQLiteDatabase;

  constructor() {
  }

  setDb(db: SQLite.SQLiteDatabase) {
    this.db = db;
  }

  getDb(): Promise<SQLite.SQLiteDatabase> {
    return new Promise(async (resolve, reject) => {
      const db = this.db;
      if (db) {
        resolve(db);
      } else {
        try {
          const db = await SQLite.openDatabaseAsync(constants.name);
          this.db = db;
          resolve(db);
        } catch (e) {
          reject(e);
        }
      }
    });
  }
}
