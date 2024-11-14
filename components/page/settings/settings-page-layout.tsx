import React from "react";
import {Pressable, StyleSheet} from "react-native";
import {Text, View} from "react-native-ui-lib";
import {useInjection} from "inversify-react";
import LogoutUseCase from "@/core/domain/use-case/logout-use-case";
import {Types} from "@/core/di/container.type";
import {useAuth} from "@/core/presentation/store/auth-store";
import {Redirect} from "expo-router";

export default function SettingsPageLayout() {
  const token = useAuth.use.token();
  const status = useAuth.use.status();
  const logOut = useAuth.use.signOut();
  const logoutUseCase = useInjection<LogoutUseCase>(Types.logoutUseCase)

  const doLogout = async () => {
    if (!token) {
      return;
    }
    logoutUseCase.execute(token)
      .then(() => {
        logOut();
      })
      .catch(() => {
      });
  }

  if (status === 'signOut') {
    return <Redirect href="/login"/>;
  }

  return (
    <View
      style={styles.container}
      testID={"settings-page-container"}
    >
      <Pressable onPress={doLogout}>
        <Text style={styles.logout}>Logout &gt;</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logout: {
    margin: 20,
  }
});
