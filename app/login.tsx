import {Stack} from "expo-router";
import LoginPageLayout from "@/components/page/login/login-page-layout";

export default function Index() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <LoginPageLayout/>
    </>
  );
}
