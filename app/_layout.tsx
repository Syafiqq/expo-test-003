import 'reflect-metadata';
import {SplashScreen, Stack} from "expo-router";
import {Provider} from "inversify-react";
import container from "@/core/di/container";
import SqliteProvider from "@/core/data/datasource/local/impl/sqlite-provider";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";
import {hydrateAuth, useAuth} from "@/core/presentation/store/auth-store";
import {useCallback, useEffect} from "react";

const queryClient = new QueryClient()

hydrateAuth();
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const status = useAuth.use.status();
  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);
  useEffect(() => {
    if (status !== 'idle') {
      setTimeout(() => {
        hideSplash();
      }, 1000);
    }
  }, [hideSplash, status]);

  return (
    <Provider container={() => container}>
      <SqliteProvider>
        <QueryClientProvider client={queryClient}>
          <Stack/>
        </QueryClientProvider>
      </SqliteProvider>
    </Provider>
  )
}
