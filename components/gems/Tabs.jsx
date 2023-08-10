import * as React from "react";

import { View, StyleSheet } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import GoalsTab from "./GoalsTab";
import GemsTab from "./GemsTab";

const Tab = createMaterialTopTabNavigator();

/**
 * Returns a Tabs component that can navigate between the "goals"
 * and "gems" layouts. Used in the main GemScreen component.
 *
 * @author Randy Nguyen
 * @param {*} props
 * @returns {View} Tabs
 */
const Tabs = (props) => {
  /**
   *  Maybe have user info as the parameter, which is then
   *  propagated down into the "GoalsTab" and "GemsTab" components.
   */
  return (
    <View style={styles.tabs}>
      <Tab.Navigator>
        {/* Add more tabs here if you'd like */}
        <Tab.Screen name="GOALS" component={GoalsTab} />
        <Tab.Screen name="GEMS" component={GemsTab} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  tabs: {
    flex: 1,
  },
});

export default Tabs;
