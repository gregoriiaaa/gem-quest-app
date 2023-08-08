import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PaperProvider } from "react-native-paper";

import WelcomeScreen from "./screens/WelcomeScreen";
import NewUser from "./screens/NewUser";

import Goal from "./components/Goal";
import GoalsDisplay from "./screens/GoalsDisplay";
import { StyleSheet, SafeAreaView } from "react-native";

{
  /* Source: https://reactnavigation.org/docs/nesting-navigators/#navigating-to-a-screen-in-a-nested-navigator */
}
const Stack = createStackNavigator();

export default function App() {
  return (
    // <PaperProvider>
    //   <NavigationContainer>
    //     {/* screenOptions={{ headerShown: false }} */}
    //     <Stack.Navigator>
    //       <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
    //       <Stack.Screen name="Create Account" component={NewUser} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </PaperProvider>
    <GoalsDisplay
      progress={3 / 5}
      icon="../assets/gems/Amethyst.png"
    ></GoalsDisplay>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
