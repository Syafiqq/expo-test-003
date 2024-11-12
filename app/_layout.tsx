import 'reflect-metadata';
import {Stack} from "expo-router";
import {Provider} from "inversify-react";
import container from "@/core/di/container";
import SqliteProvider from "@/core/data/datasource/local/impl/sqlite-provider";

export default function RootLayout() {
  return (
    <Provider container={() => container}>
      <SqliteProvider>
        <Stack/>
      </SqliteProvider>
    </Provider>
  )
}
