import * as React from "react";

import { ScrollView, View, StyleSheet } from "react-native";

import Goal from "./Goal";

/**
 * 
 * (TODO: Should have props.firstGoal info, props.secondGoal info...)
 * @param {*} props 
 * @returns 
 */
const GoalsTab = (props) => {
  return (
    // Allow for scrolling
    <ScrollView style={styles.container}>
      {/* Set of 3 currently active Goals */}
      <View style={styles.goalsContainer}>
        <View style={styles.goal}>
          <Goal
            description="post 5 quests (5 pts)"
            progress={3 / 5}
            icon="../assets/gemQuest.png"
          ></Goal>
        </View>
        <View style={styles.goal}>
          <Goal
            description="login for a week (10 pts)"
            progress={4 / 10}
            icon="../assets/gemQuest.png"
          ></Goal>
        </View>
        <View style={styles.goal}>
          <Goal
            description="finish your profile (5 pts)"
            progress={0 / 1}
            icon="../assets/gemQuest.png"
          ></Goal>
        </View>
      </View>
    </ScrollView>
  );
};

export default GoalsTab;

/**
 *  Styles are slightly forced with hard-coded numerical values.
 *  May not be accurately represented on different models/devices.
 *  Based off Figma iPhone 14 dimensions.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  goalsContainer: {
    alignItems: "center",
  },
  goal: {
    flex: 1,
    padding: 35,
  },
});
