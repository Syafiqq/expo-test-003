import {SQLiteDatabase} from "expo-sqlite";

type Version = {
  user_version: number | null;
}

async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1;
  const versionRes: Version | null = await db.getFirstAsync<Version>(
    'PRAGMA user_version'
  );
  const version = versionRes?.user_version ?? 0
  if (version >= DATABASE_VERSION) {
    return;
  }
  if (version === 0) {
    await db.execAsync(`
PRAGMA journal_mode = 'wal';
CREATE TABLE todos (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
`);
    await db.runAsync('INSERT INTO todos (value, intValue) VALUES (?, ?)', 'hello', 1);
    await db.runAsync('INSERT INTO todos (value, intValue) VALUES (?, ?)', 'world', 2);
  }
  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}

export default migrateDbIfNeeded;
