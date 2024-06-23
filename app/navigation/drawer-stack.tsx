import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { DrawerScreenOne } from "../screens/drawer-screen-one";
import { DrawerScreenTwo } from "../screens/drawer-screen-two";

type DrawerStackParamList = {
  DrawerScreenOne: undefined;
  DrawerScreenTwo: undefined;
};

const DrawerStack = createDrawerNavigator<DrawerStackParamList>();

function CustomDrawerContent(props: any) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView>
      <DrawerItemList {...props} />
      <DrawerItem label="Reset Navigation" onPress={() => navigation.goBack()}/>
    </DrawerContentScrollView>
  );
}

export function DrawerStackNavigation() {
  return (
    <DrawerStack.Navigator drawerContent={CustomDrawerContent} screenOptions={{
      headerStyle: {
        backgroundColor: '#1e29f4',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <DrawerStack.Screen name="DrawerScreenOne" component={DrawerScreenOne}/>
      <DrawerStack.Screen name="DrawerScreenTwo" component={DrawerScreenTwo}/>
    </DrawerStack.Navigator>);
}
