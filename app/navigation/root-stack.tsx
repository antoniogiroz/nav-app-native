import { StyleSheet, ViewProps } from 'react-native';
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/home";
import { FeedScreen } from "../screens/feed";
import { ProfileScreen } from "../screens/profile";
import { DetailsScreen } from "../screens/details";
import { ModalScreen } from "../screens/modal-screen";

type RootStackParamList = {
  Home: undefined;
  Feed: undefined;
  Profile: undefined;
  Details: { itemId: number };
  Modal: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;
export type FeedScreenProps = NativeStackScreenProps<RootStackParamList, "Feed">;
export type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, "Profile">;
export type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, "Details">;

export function RootStackNavigation(props: ViewProps) {
  return (
    <RootStack.Navigator>
      <RootStack.Group screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <RootStack.Screen name="Home" component={HomeScreen} options={{ title: 'Your home' }}/>
        <RootStack.Screen name="Feed" component={FeedScreen}/>
        <RootStack.Screen name="Profile" component={ProfileScreen}/>
        <RootStack.Screen name="Details" component={DetailsScreen}/>
      </RootStack.Group>

      <RootStack.Group screenOptions={{
        presentation: 'modal',
      }}>
        <RootStack.Screen name="Modal" component={ModalScreen}/>
      </RootStack.Group>
    </RootStack.Navigator>);
}

const styles = StyleSheet.create({
  container: {},
});
