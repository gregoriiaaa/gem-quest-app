import { useState } from "react";

import { View, Text, StyleSheet, Pressable } from "react-native";
import * as Progress from "react-native-progress";

function isClaimable(progress, maxProgress, text) {
  if (text === "CLAIMED") {
    return <Text style={styles.claimed}>{text}</Text>;
  }
  if (progress === maxProgress) {
    return <Text style={styles.claimable}>{text}</Text>;
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
  const [claimed, setClaimed] = useState("CLAIM");

  return (
    <Pressable
      onPress={() => {
        if (props.progress === props.maxProgress) {
          console.log("do gem acq logic here");
          setClaimed("CLAIMED");
        }
      }}
    >
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
        {isClaimable(progress, props.maxProgress, claimed)}
      </View>
    </Pressable>
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
  claimed: {
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#6770e0",
    flex: 1,
    position: "absolute",
    zIndex: 5,
    paddingLeft: 35,
    paddingTop: 1.5,
  },
});
