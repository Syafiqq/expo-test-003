interface LoginUseCase {
  execute(username: string, password: string): Promise<void>;
}

export default LoginUseCase;
