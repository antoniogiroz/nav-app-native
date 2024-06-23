import { Button, StyleSheet, Text, View } from 'react-native';
import { HomeScreenProps } from "../navigation/root-stack";
import { useLayoutEffect } from "react";

export function HomeScreen({ navigation }: HomeScreenProps) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Info" onPress={() => alert('Info clicked')} color={'#fff'}/>
      }
    });
  }, []);


  return <View style={styles.container}>
    <Text>Home Screen</Text>
    <Button title="Feed" onPress={() => navigation.push('Feed')}/>
    <Button title="Open Profile" onPress={() => navigation.push('Profile')}/>
    <Button title="Open Details 42" onPress={() => navigation.push('Details', { itemId: 42 })}/>
    <Button title="Open Details 53" onPress={() => navigation.push('Details', { itemId: 53 })}/>

    <Button title="Open Modal" onPress={() => navigation.push('Modal')}/>

  </View>;
}

const styles = StyleSheet.create({
  container: {},
});
