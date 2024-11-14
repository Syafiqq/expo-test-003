import 'reflect-metadata';
import {Stack} from "expo-router";
import {Provider} from "inversify-react";
import container from "@/core/di/container";
import SqliteProvider from "@/core/data/datasource/local/impl/sqlite-provider";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

export default function RootLayout() {
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
