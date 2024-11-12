interface AuthCacheDataSource {
  authToken(): Promise<number>;

  setAuthToken(token: number | undefined): Promise<void>;
}

export default AuthCacheDataSource;
