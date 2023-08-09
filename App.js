import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MyBottomNavigation from "./components/BottomNavigation";
import { PaperProvider } from "react-native-paper";

import WelcomeScreen from "./screens/WelcomeScreen";
import NewUser from "./screens/NewUser";
import LayoutScreen from "./navigation/LayoutScreen.jsx";

import Explore from "./screens/Explore";
import CreateQuest from "./screens/CreateQuest";
import Gems from "./screens/Gems";
import Profile from "./screens/Profile";
import LogIn from "./screens/LogIn";
import Home from "./screens/Home";

{
  /* Source: 
  https://reactnavigation.org/docs/nesting-navigators/#navigating-to-a-screen-in-a-nested-navigator */
}
const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        {/*Put Inside Stack.Navigator to remove nav bar: screenOptions={{ headerShown: false }} */}
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
          <Stack.Screen name="Create Account" component={NewUser} />
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="LayoutScreen" component={LayoutScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Explore" component={MyBottomNavigation} />
          <Stack.Screen name="CreateQuest" component={CreateQuest} />
          <Stack.Screen name="Gems" component={Gems} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
