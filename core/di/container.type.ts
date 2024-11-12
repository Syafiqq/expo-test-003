type TypesMap = {
  // datasource/cache
  mmkv: symbol;
  cacheStorage: symbol;
};

const Types: TypesMap = {
  mmkv: Symbol.for('MMKV'),
  cacheStorage: Symbol.for('CacheStorage'),
}

export {
  type TypesMap,
  Types,
};
