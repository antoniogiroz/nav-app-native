import { Button, StyleSheet, Text, View, ViewProps } from 'react-native';
import { DetailsScreenProps } from "../navigation/root-stack";
import { useLayoutEffect } from "react";

export function DetailsScreen({ navigation, route }: DetailsScreenProps) {
  const { itemId } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Detailss ' + itemId,
    });
  }, []);

  return <View style={styles.container}>
    <Text>Details {itemId}</Text>
  </View>;
}

const styles = StyleSheet.create({
  container: {},
});
