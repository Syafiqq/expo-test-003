import 'reflect-metadata';
import {Container} from 'inversify';
import {Types} from '@/core/di/container.type';
import AuthRepository from '@/core/domain/repository/auth-repository';
import LogoutUseCaseImpl from '../logout-use-case-impl';
import {beforeEach, describe, expect, it, jest} from '@jest/globals';

describe('LogoutUseCaseImpl', () => {
  let container: Container;
  let authRepository: jest.Mocked<AuthRepository>;
  let logoutUseCase: LogoutUseCaseImpl;

  beforeEach(() => {
    container = new Container();
    authRepository = {
      logoutFromRemote: jest.fn(),
      setAuthTokenToCache: jest.fn(),
      authTokenFromCache: jest.fn(),
      authenticatedFromRemote: jest.fn(),
      loginFromRemote: jest.fn(),
    };

    container.bind<AuthRepository>(Types.authRepository).toConstantValue(authRepository);
    logoutUseCase = container.resolve(LogoutUseCaseImpl);
  });

  it('should logout user and clear auth token from cache', async () => {
    const token = 123;

    await logoutUseCase.execute(token);

    expect(authRepository.logoutFromRemote).toHaveBeenCalledWith(token);
    expect(authRepository.setAuthTokenToCache).toHaveBeenCalledWith(undefined);
  });

  it('should clear auth token from cache even if logout fails', async () => {
    const token = 123;
    authRepository.logoutFromRemote.mockRejectedValue(new Error('Logout failed'));

    await expect(logoutUseCase.execute(token)).resolves.toBeUndefined();

    expect(authRepository.logoutFromRemote).toHaveBeenCalledWith(token);
    expect(authRepository.setAuthTokenToCache).toHaveBeenCalledWith(undefined);
  });
});
