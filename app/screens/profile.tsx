import { Button, StyleSheet, Text, View } from 'react-native';
import { ProfileScreenProps } from "../navigation/root-stack";

export function ProfileScreen({ navigation }: ProfileScreenProps) {
  return <View style={styles.container}>
    <Text>Profile Screen</Text>
    <Button title="Go Back" onPress={() => navigation.goBack()} />
  </View>;
}

const styles = StyleSheet.create({
  container: {},
});
