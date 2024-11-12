type TypesMap = {
  // datasource/cache
  mmkv: symbol;
};

const Types: TypesMap = {
  mmkv: Symbol.for('MMKV'),
}

export {
  type TypesMap,
  Types,
};
