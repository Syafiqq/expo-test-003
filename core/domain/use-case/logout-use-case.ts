interface LogoutUseCase {
  execute(token: number): Promise<void>;
}

export default LogoutUseCase;
