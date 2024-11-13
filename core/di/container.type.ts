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
  authRemoteDataSource: symbol;

  // repository
  authRepository: symbol;
  todoRepository: symbol;

  // use-case
  checkAuthenticationUseCase: symbol;
};

const Types: TypesMap = {
  mmkv: Symbol.for('MMKV'),
  cacheStorage: Symbol.for('CacheStorage'),
  authCacheDataSource: Symbol.for('AuthCacheDataSource'),

  sqliteService: Symbol.for('SQLiteService'),
  localStorage: Symbol.for('LocalStorage'),
  todoLocalDataSource: Symbol.for('TodoLocalDataSource'),

  remoteService: Symbol.for('RemoteService'),
  authRemoteDataSource: Symbol.for('AuthRemoteDataSource'),

  authRepository: Symbol.for('AuthRepository'),
  todoRepository: Symbol.for('TodoRepository'),

  checkAuthenticationUseCase: Symbol.for('CheckAuthenticationUseCase'),
}

export {
  type TypesMap,
  Types,
};
