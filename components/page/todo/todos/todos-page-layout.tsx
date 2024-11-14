import {FlatList, StyleSheet, View} from "react-native";
import {useTodosQuery} from "@/core/presentation/vm/use-todos-query";
import React, {useCallback} from "react";
import {TodoEntity} from "@/core/domain/entity/todo-entity";
import {Text} from "react-native-ui-lib";

export default function TodosPageLayout() {
  const {
    isPending,
    isError,
    data: todos,
  } = useTodosQuery();

  const renderItem = React.useCallback(
    ({item}: { item: TodoEntity }) => (
      <>
        <Text style={styles.todo_item}>{item.value}</Text>
      </>
    ),
    [],
  )

  const keyExtractor = useCallback((item: TodoEntity, i: number) => `${i}-${item.intValue}`, []);

  if (isPending) {
    return (
      <>
      </>
    );
  }

  if (isError) {
    return (
      <>
      </>
    );
  }

  return (
    <View
      style={styles.container}
      testID={"todos-page-container"}
    >
      <FlatList
        data={todos ?? []}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={{paddingBottom: 80, paddingTop: 32}}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
  todo_item: {
    padding: 8,
  }
});
