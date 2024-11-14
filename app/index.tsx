import {Stack} from "expo-router";
import SplashScreenLayout from "@/components/page/splash-screen-layout";

export default function Index() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <SplashScreenLayout/>
    </>
  );
}
