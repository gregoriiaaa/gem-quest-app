import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import GemsDisplay from "../screens/GemsDisplay";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

const Tabs = (props) => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="GOALS" component={HomeScreen} />
        <Tab.Screen name="GEMS" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
