type TypesMap = {
  // datasource/cache
  mmkv: symbol;
  cacheStorage: symbol;
  authCacheDataSource: symbol;

  // datasource/local
  sqliteService: symbol;
};

const Types: TypesMap = {
  mmkv: Symbol.for('MMKV'),
  cacheStorage: Symbol.for('CacheStorage'),
  authCacheDataSource: Symbol.for('AuthCacheDataSource'),

  sqliteService: Symbol.for('SQLiteService'),
}

export {
  type TypesMap,
  Types,
};
