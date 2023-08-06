import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PaperProvider } from "react-native-paper";

import WelcomeScreen from "./WelcomeScreen";
import NewUser from "./NewUser";
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
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="NewUser" component={NewUser} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
