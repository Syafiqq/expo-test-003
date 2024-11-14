import {Redirect, Stack} from "expo-router";
import SplashScreenLayout from "@/components/page/splash-screen-layout";
import {useAuth} from "@/core/presentation/store/auth-store";

export default function Index() {
  const status = useAuth.use.status();

  if (status === 'signOut') {
    return <Redirect href="/login"/>;
  }

  if (status === 'signIn') {
    return <Redirect href="/(main)"/>;
  }

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
