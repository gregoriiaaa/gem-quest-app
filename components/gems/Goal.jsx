import * as React from "react";

import { View, StyleSheet } from "react-native";
import { Avatar, Card } from "react-native-paper";

import GoalProgress from "./GoalProgress";

/**
 * Returns a Goal component; a Card with a nested Progress Bar.
 * @author Randy Nguyen
 * @param {description, progress} props
 * @param {string} description Goal description
 * @param {int} progress Progress so far.
 * @param {int} maxProgress Progress denominator.
 * @returns {Card} Goal
 */
const Goal = (props) => {
  return (
    <Card style={styles.goal}>
      {/* Goal description */}
      <Card.Title
        title={props.description}
        titleStyle={styles.description}
        left={(props) => (
          <Avatar.Image
            style={{ paddingTop: 10, backgroundColor: null }}
            alt="goal-icon"
            size={45}
            source={require("../../assets/gemQuest.png")}
          />
        )}
      />
      {/* Progress bar */}
      <Card.Content>
        <View style={styles.progressBar}>
          <GoalProgress
            progress={props.progress}
            maxProgress={props.maxProgress}
          ></GoalProgress>
        </View>
      </Card.Content>
    </Card>
  );
};

/**
 *  Styles are slightly forced with hard-coded numerical values.
 *  May not be accurately represented on different models/devices.
 *  Based off Figma iPhone 14 dimensions.
 */
const styles = StyleSheet.create({
  goal: {
    flex: 1,
    width: 300,
    height: 110,
    backgroundColor: "#bd92cd",
    borderColor: "#c6c8c6",
    borderWidth: 2,
  },
  description: {
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "bold",
  },
  progressBar: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 40,
    bottom: 10,
  },
});

export default Goal;
