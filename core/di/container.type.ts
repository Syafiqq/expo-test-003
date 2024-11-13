type TypesMap = {
  // datasource/cache
  mmkv: symbol;
  cacheStorage: symbol;
  authCacheDataSource: symbol;

  // datasource/local
  sqliteService: symbol;
  localStorage: symbol;
  todoLocalDataSource: symbol;

  // datasource/remote
  remoteService: symbol;
};

const Types: TypesMap = {
  mmkv: Symbol.for('MMKV'),
  cacheStorage: Symbol.for('CacheStorage'),
  authCacheDataSource: Symbol.for('AuthCacheDataSource'),

  sqliteService: Symbol.for('SQLiteService'),
  localStorage: Symbol.for('LocalStorage'),
  todoLocalDataSource: Symbol.for('TodoLocalDataSource'),

  remoteService: Symbol.for('RemoteService'),
}

export {
  type TypesMap,
  Types,
};
