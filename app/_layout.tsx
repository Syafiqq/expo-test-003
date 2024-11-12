import 'reflect-metadata';
import {Stack} from "expo-router";
import {Provider} from "inversify-react";
import container from "@/core/di/container";

export default function RootLayout() {
  return (
    <Provider container={() => container}>
      <Stack/>
    </Provider>
  )
}
