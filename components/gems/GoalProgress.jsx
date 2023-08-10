import { useState } from "react";

import { View, Text, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

function isClaimable(progress, maxProgress) {
  if (progress === maxProgress) {
    return <Text style={styles.claimable}>CLAIM</Text>;
  }
  return <Text style={styles.textStyle}>{progress + "/" + maxProgress}</Text>;
}

/**
 * Returns a Progress Bar component to be used inside a Goal component.
 * @author Randy Nguyen
 * @param {progress, maxProgress} props
 * @param {int} progress Progress on a goal.
 * @param {int} maxProgress Denominator.
 * @returns {Progress.Bar} GoalProgress
 */
const GoalProgress = (props) => {
  /**
   * TODO:
   *  Update the state of the goal's progress bar when a related
   *  action is completed.
   */
  const [progress, setProgress] = useState(props.progress);

  return (
    <View style={styles.container}>
      <Progress.Bar
        progress={progress / props.maxProgress}
        animated={true}
        color="#fde3e7"
        unfilledColor="#fff1cb"
        width={125}
        height={20}
        borderRadius={15}
      ></Progress.Bar>
      {isClaimable(progress, props.maxProgress)}
    </View>
  );
};

export default GoalProgress;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  textStyle: {
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#6770e0",
    flex: 1,
    position: "absolute",
    zIndex: 5,
    paddingLeft: 55,
    paddingTop: 1.5,
  },
  claimable: {
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#6770e0",
    flex: 1,
    position: "absolute",
    zIndex: 5,
    paddingLeft: 40,
    paddingTop: 1.5,
  },
});
