import {StyleSheet, Text, View} from 'react-native';
import TodosPageLayout from "@/components/page/todo/todos/todos-page-layout";

export default function Index() {
  return (
    <View style={styles.container}>
      <TodosPageLayout/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
