import * as SQLite from "expo-sqlite";
import migrateDbIfNeeded from "@/core/data/datasource/local/impl/sqlite-migration";
import React from "react";
import constants from './sqlite.constants';

const SqliteProvider = ({children}: { children: React.ReactNode }) => {
  return (
    <SQLite.SQLiteProvider databaseName={constants.name} onInit={migrateDbIfNeeded}>
      {children}
    </SQLite.SQLiteProvider>
  )
}

export default SqliteProvider;
