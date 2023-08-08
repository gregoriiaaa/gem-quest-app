/** import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native"; */

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PaperProvider } from "react-native-paper";

import WelcomeScreen from "./screens/WelcomeScreen";
import NewUser from "./screens/NewUser";
{
  /* Source: https://reactnavigation.org/docs/nesting-navigators/#navigating-to-a-screen-in-a-nested-navigator */
}
const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        {/* screenOptions={{ headerShown: false }} */}
        <Stack.Navigator>
          <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
          <Stack.Screen name="Create Account" component={NewUser} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
