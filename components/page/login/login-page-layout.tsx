import {StyleSheet, View} from "react-native";
import React from "react";
import LoginForm from "@/components/page/login/components/login-component";

export default function LoginPageLayout() {

  return (
    <View
      style={styles.container}
      testID={"login-page-container"}
    >
      <LoginForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: '40%',
    alignItems: 'center',
  },
});
