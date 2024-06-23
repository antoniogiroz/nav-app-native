import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackNavigation } from "./root-stack";
import { DrawerStackNavigation } from "./drawer-stack";
import { FeedScreen } from "../screens/feed";
import { Ionicons } from '@expo/vector-icons';

type TabStackParamList = {
  HomeTab: undefined;
  DrawerTab: undefined;
  FeedTab: undefined;
};

const TabStack = createBottomTabNavigator<TabStackParamList>();

export function TabStackNavigation() {
  return (
    <TabStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <TabStack.Screen name="HomeTab"
                       component={RootStackNavigation}
                       options={{
                         tabBarLabel: 'Home',
                         tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color}/>
                       }}
      />
      <TabStack.Screen name="DrawerTab"
                       component={DrawerStackNavigation}
                       options={{
                         tabBarLabel: 'Drawer',
                         tabBarIcon: ({ color, size }) => <Ionicons name="menu" size={size} color={color}/>
                       }}/>
      <TabStack.Screen name="FeedTab" component={FeedScreen}
                       options={{
                         headerShown: true,
                         tabBarLabel: 'Feed',
                         tabBarIcon: ({ color, size }) => <Ionicons name="book" size={size} color={color}/>
                       }}/>
    </TabStack.Navigator>
  );
}
