import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  ImageBackground,
  Text,
  ScrollView,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Goal from "./Goal";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import GemsDisplay from "../../screens/gems/GemsDisplay";

const GoalsTab = (props) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.goalsContainer}>
        <View style={styles.goalsLayout}>
          <View style={styles.goal}>
            <Goal
              description="post 5 quests (5 pts)"
              progress={3 / 5}
              icon="../assets/gemQuest.png"
            ></Goal>
          </View>
          <View style={styles.goal}>
            <Goal
              description="post 5 quests (5 pts)"
              progress={3 / 5}
              icon="../assets/gemQuest.png"
            ></Goal>
          </View>
          <View style={styles.goal}>
            <Goal
              description="post 5 quests (5 pts)"
              progress={3 / 5}
              icon="../assets/gemQuest.png"
            ></Goal>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const GemsTab = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();

const Tabs = (props) => {
  return (
    <View style={styles.navContainer}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="GOALS" component={GoalsTab} />
          <Tab.Screen name="GEMS" component={GemsTab} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  navContainer: {
    flex: 1,
  },

  goalsContainer: {
    flex: 1,
  },
  goalsLayout: {
    flexDirection: "column",
    alignItems: "center",
  },
  goal: {
    flex: 1,
    padding: 35,
  },
  tabs: {
    flex: 1,
  },
});

export default Tabs;
