import * as SQLite from "expo-sqlite";
import migrateDbIfNeeded from "@/core/data/datasource/local/impl/sqlite-migration";
import React from "react";
import {useDrizzleStudio} from "expo-drizzle-studio-plugin";
import {useInjection} from "inversify-react";
import {Types} from "@/core/di/container.type";
import {SQLiteService} from "@/core/data/datasource/local/impl/sqlite";
import constants from './sqlite.constants';

const SqliteProvider = ({children}: { children: React.ReactNode }) => {
  return (
    <SQLite.SQLiteProvider databaseName={constants.name} onInit={migrateDbIfNeeded}>
      {children}
    </SQLite.SQLiteProvider>
  )
}

const SqliteProviderChild = ({children}: { children: React.ReactNode }) => {
  const db: SQLite.SQLiteDatabase = SQLite.useSQLiteContext();
  const sqlService = useInjection<SQLiteService>(Types.sqliteService)
  // @ts-ignore
  useDrizzleStudio(db);
  sqlService.setDb(db);
  return children;
}

export default SqliteProvider;
