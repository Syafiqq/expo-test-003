interface AuthRepository {
  // cache
  authTokenFromCache(): Promise<number>;

  setAuthTokenToCache(token: number | undefined): Promise<void>;

  // remote
  authenticatedFromRemote(token: number): Promise<number>

  loginFromRemote(username: string, password: string): Promise<number>

  logoutFromRemote(token: number): Promise<void>
}

export default AuthRepository;
