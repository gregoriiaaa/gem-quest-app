import { useState } from "react";

import { StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

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
    <Progress.Bar
      progress={progress / props.maxProgress}
      animated={true}
      color="#fde3e7"
      unfilledColor="#fff1cb"
      width={125}
      height={20}
      borderRadius={15}
    ></Progress.Bar>
    // <ProgressButton
    //   style={{
    //     width: 125,
    //     height: 20,
    //     borderWidth: 0,
    //     borderRadius: 20,
    //     padding: 0,
    //   }}
    //   text={progress + "/" + props.maxProgress}
    //   textStyle={styles.textStyle}
    //   buttonState="progress"
    //   smoothly={true}
    //   progress={props.progress}
    //   maxProgress={props.maxProgress}
    //   progressColor="#fde3e7"
    //   unfilledColor="#fff1cb"
    // ></ProgressButton>
  );
};

export default GoalProgress;

const styles = StyleSheet.create({
  textStyle: {
    fontStyle: "italic",
  },
});
