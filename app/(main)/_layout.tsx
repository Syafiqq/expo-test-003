import 'reflect-metadata';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Redirect, Stack, Tabs} from 'expo-router';
import {useAuth} from "@/core/presentation/store/auth-store";

export default function TabLayout() {
  const status = useAuth.use.status();

  if (status === 'signOut') {
    return <Redirect href="/login"/>;
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Tabs screenOptions={{tabBarActiveTintColor: 'blue'}}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color}/>,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            tabBarIcon: ({color}) => <FontAwesome size={28} name="cog" color={color}/>,
          }}
        />
      </Tabs>
    </>
  );
}
