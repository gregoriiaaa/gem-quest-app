import * as React from "react";

import { View, StyleSheet } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";

import GoalProgress from "./GoalProgress";

/**
 * Returns a Goal component; a Card with a nested Progress Bar.
 * @author Randy Nguyen
 * @param {description, progress} props
 * @param {string} description Goal description
 * @param {float} progress (TODO: Convert to fraction string) Total progress.
 * @returns {Card} Goal
 */
const Goal = (props) => {
  return (
    <Card style={styles.goal}>
      {/* Goal description */}
      <Card.Title
        title={props.description}
        titleStyle={styles.description}
        left={(props) => <Avatar.Icon {...props} icon={props.icon} />}
      />
      {/* Progress bar */}
      <Card.Content>
        <View style={styles.progressBar}>
          <Text style={styles.progress}>{props.progress}</Text>
          <GoalProgress progress={props.progress}></GoalProgress>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: 10,
    paddingLeft: 40,
  },
  progress: {
    textAlign: "center",
    color: "#6770e0",
    fontWeight: "bold",
    top: 25,
  },
});

export default Goal;
