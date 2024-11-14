import {StyleSheet, Text, View} from "react-native";

export default function SplashScreenLayout() {
  return (
    <View
      style={styles.container}
      testID={"splash-screen-container"}
    >
      <Text
        testID={"splash-screen-text"}
      >
        Splash Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
