/** import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native"; */

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MyBottomNavigation from "./components/BottomNavigation";
import { PaperProvider } from "react-native-paper";

import WelcomeScreen from "./screens/WelcomeScreen";
import NewUser from "./screens/NewUser";
import UserProfile from "./screens/UserProfile";
import BuildProfile from "./screens/BuildProfile";

import LayoutScreen from "./navigation/LayoutScreen.jsx";
import Home from "./screens/Home";
import Explore from "./screens/Explore";
import CreateQuest from "./screens/CreateQuest";
import Gems from "./screens/Gems";
import Profile from "./screens/Profile";
import LogIn from "./screens/LogIn";
// import GemAcquisition from "./screens/gems/GemAquisition";

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
          <Stack.Screen name="BuildProfile" component={BuildProfile} />
          <Stack.Screen name="UserProfile" component={UserProfile} />

          <Stack.Screen name="LayoutScreen" component={LayoutScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Explore" component={MyBottomNavigation} />
          <Stack.Screen name="CreateQuest" component={CreateQuest} />
          <Stack.Screen name="Gems" component={Gems} />
          <Stack.Screen name="Profile" component={Profile} />
          {/* <Stack.Screen name="GemAcquisition" component={GemAcquisition} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
