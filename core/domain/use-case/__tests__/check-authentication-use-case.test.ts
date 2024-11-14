import 'reflect-metadata';
import {Container} from 'inversify';
import {Types} from '@/core/di/container.type';
import AuthRepository from '@/core/domain/repository/auth-repository';
import CheckAuthenticationUseCaseImpl from '../check-authentication-use-case-impl';
import {beforeEach, describe, expect, it, jest} from "@jest/globals";
import {InvalidSessionError} from "@/core/common/error/auth-error";

describe('CheckAuthenticationUseCaseImpl', () => {
  let container: Container;
  let authRepository: jest.Mocked<AuthRepository>;
  let checkAuthenticationUseCase: CheckAuthenticationUseCaseImpl;

  beforeEach(() => {
    container = new Container();
    authRepository = {
      authTokenFromCache: jest.fn(),
      setAuthTokenToCache: jest.fn(),
      authenticatedFromRemote: jest.fn(),
      loginFromRemote: jest.fn(),
      logoutFromRemote: jest.fn(),
    };

    container.bind<AuthRepository>(Types.authRepository).toConstantValue(authRepository);
    checkAuthenticationUseCase = container.resolve(CheckAuthenticationUseCaseImpl);
  });

  it('should authenticate user and update token if necessary', async () => {
    const token = 123;
    const newToken = 456;

    authRepository.authTokenFromCache.mockResolvedValue(token);
    authRepository.authenticatedFromRemote.mockResolvedValue(newToken);

    const result = await checkAuthenticationUseCase.execute();

    expect(result).toBe(newToken);
    expect(authRepository.authTokenFromCache).toHaveBeenCalled();
    expect(authRepository.authenticatedFromRemote).toHaveBeenCalledWith(token);
    expect(authRepository.setAuthTokenToCache).toHaveBeenCalledWith(newToken);
  });

  it('should not update token if it remains the same', async () => {
    const token = 123;
    authRepository.authTokenFromCache.mockResolvedValue(token);
    authRepository.authenticatedFromRemote.mockResolvedValue(token);

    const result = await checkAuthenticationUseCase.execute();

    expect(result).toBe(token);
    expect(authRepository.authTokenFromCache).toHaveBeenCalled();
    expect(authRepository.authenticatedFromRemote).toHaveBeenCalledWith(token);
    expect(authRepository.setAuthTokenToCache).not.toHaveBeenCalled();
  });

  it('should throw InvalidSessionError if no token available in local', async () => {
    authRepository.authTokenFromCache.mockRejectedValue(new InvalidSessionError());

    await expect(checkAuthenticationUseCase.execute()).rejects.toThrow(InvalidSessionError);

    expect(authRepository.authTokenFromCache).toHaveBeenCalled();
    expect(authRepository.authenticatedFromRemote).not.toHaveBeenCalled();
    expect(authRepository.setAuthTokenToCache).not.toHaveBeenCalled();
  });
});
