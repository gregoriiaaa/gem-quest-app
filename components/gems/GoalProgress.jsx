import { useState } from "react";

import { StyleSheet } from "react-native";

import * as Progress from "react-native-progress";

/**
 * Returns a Progress Bar component to be used inside a Goal component.
 * @param {progress} props 
 * @param {float} progress (TODO: Convert to fraction string) Progress on a goal.
 * @returns {GoalProgress}
 */
const GoalProgress = (props) => {
  const [progress, setProgress] = useState(0);

  return (
    <Progress.Bar
      progress={props.progress}
      color="#fde3e7"
      unfilledColor="#fff1cb"
      width={125}
      height={20}
      borderRadius={20}
      animated={true}
      borderColor="#bd92cd"
    />
  );
};

const styles = StyleSheet.create({});

export default GoalProgress;
