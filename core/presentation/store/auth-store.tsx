import {create} from 'zustand';
import container from "@/core/di/container";
import {Types} from "@/core/di/container.type";
import CheckAuthenticationUseCase from "@/core/domain/use-case/check-authentication-use-case";
import {createSelectors} from "@/core/presentation/store/utils";

interface AuthState {
  token: number | undefined;
  status: 'idle' | 'signOut' | 'signIn';
  signIn: (token: number) => void;
  signOut: () => void;
  hydrate: () => void;
}

const _useAuth = create<AuthState>((set, get) => ({
  status: 'idle',
  token: undefined,
  signIn: (token) => {
    set({status: 'signIn', token});
  },
  signOut: () => {
    set({status: 'signOut', token: undefined});
  },
  hydrate: async () => {
    let useCase = container.get<CheckAuthenticationUseCase>(Types.checkAuthenticationUseCase)
    useCase.execute()
      .then((token) => {
        get().signIn(token);
      })
      .catch(() => {
        get().signOut();
      });
  },
}));

export const hydrateAuth = () => _useAuth.getState().hydrate();
export const useAuth = createSelectors(_useAuth);
