import 'reflect-metadata';
import {Container} from 'inversify';
import {Types} from '@/core/di/container.type';
import AuthRepository from '@/core/domain/repository/auth-repository';
import LoginUseCaseImpl from '../login-use-case-impl';
import {beforeEach, describe, expect, it, jest} from '@jest/globals';
import {InvalidCredentialsError} from "@/core/common/error/auth-error";

describe('LoginUseCaseImpl', () => {
  let container: Container;
  let authRepository: jest.Mocked<AuthRepository>;
  let loginUseCase: LoginUseCaseImpl;

  beforeEach(() => {
    container = new Container();
    authRepository = {
      loginFromRemote: jest.fn(),
      setAuthTokenToCache: jest.fn(),
      authTokenFromCache: jest.fn(),
      authenticatedFromRemote: jest.fn(),
      logoutFromRemote: jest.fn(),
    };

    container.bind<AuthRepository>(Types.authRepository).toConstantValue(authRepository);
    loginUseCase = container.resolve(LoginUseCaseImpl);
  });

  it('should login user and set auth token to cache', async () => {
    const username = 'testuser';
    const password = 'testpassword';
    const token = 123;

    authRepository.loginFromRemote.mockResolvedValue(token);

    await loginUseCase.execute(username, password);

    expect(authRepository.loginFromRemote).toHaveBeenCalledWith(username, password);
    expect(authRepository.setAuthTokenToCache).toHaveBeenCalledWith(token);
  });

  it('should throw an error if login fails', async () => {
    const username = 'testuser';
    const password = 'testpassword';
    const error = new InvalidCredentialsError();

    authRepository.loginFromRemote.mockRejectedValue(error);

    await expect(loginUseCase.execute(username, password)).rejects.toThrow(InvalidCredentialsError);

    expect(authRepository.loginFromRemote).toHaveBeenCalledWith(username, password);
    expect(authRepository.setAuthTokenToCache).not.toHaveBeenCalled();
  });
});
