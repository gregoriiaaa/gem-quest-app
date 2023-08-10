import * as React from "react";

import { Text, ScrollView, View, StyleSheet } from "react-native";

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
            description={
              <Text style={styles.description}>
                post 5 quests<Text style={styles.pointsValue}> (5 pts)</Text>
              </Text>
            }
            progress={5}
            maxProgress={5}
          ></Goal>
        </View>
        <View style={styles.goal}>
          <Goal
            description={
              <Text style={styles.description}>
                login for a week
                <Text style={styles.pointsValue}> (10 pts)</Text>
              </Text>
            }
            progress={4}
            maxProgress={7}
          ></Goal>
        </View>
        <View style={styles.goal}>
          <Goal
            description={
              <Text style={styles.description}>
                finish your profile
                <Text style={styles.pointsValue}> (5 pts)</Text>
              </Text>
            }
            progress={0}
            maxProgress={1}
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
  description: {
    fontSize: 16,
  },
  pointsValue: {
    fontStyle: "italic",
  },
});
