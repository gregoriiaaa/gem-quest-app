import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PaperProvider } from "react-native-paper";

import WelcomeScreen from "./screens/WelcomeScreen";
import NewUser from "./screens/NewUser";

/** Gem Imports */
import GemScreen from "./screens/gems/GemScreen";
import GemAcquisition from "./screens/gems/GemAquisition";

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

    <GemScreen
      progress={700 / 1000}
      icon="../assets/gems/Amethyst.png"
    ></GemScreen>
    // <GemAcquisition color="#ec8bee" gem="AMETHYST"></GemAcquisition>
  );
}
