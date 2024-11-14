import {StyleSheet, View} from 'react-native';
import SettingsPageLayout from "@/components/page/settings/settings-page-layout";

export default function Settings() {
  return (
    <View style={styles.container}>
      <SettingsPageLayout/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
