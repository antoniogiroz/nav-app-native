import { NavigationContainer } from "@react-navigation/native";
import { TabStackNavigation } from "./app/navigation/tab-stack";

export default function App() {
  return (
    <NavigationContainer>
      <TabStackNavigation/>
    </NavigationContainer>
  );
}
