interface AuthLocalDataSource {
  authenticated(token: number): Promise<number>

  login(username: string, password: string): Promise<number>

  logout(token: number): Promise<void>
}

export default AuthLocalDataSource;
