import { useState } from "react";

import * as Progress from "react-native-progress";

/**
 * Returns a Progress Bar component to be used inside a Goal component.
 * @author Randy Nguyen
 * @param {progress} props 
 * (TODO: Convert float to fraction string) 
 * @param {float} progress Progress on a goal.
 * @returns {Progress.Bar} GoalProgress
 */
const GoalProgress = (props) => {
  /**
   * TODO:
   *  Update the state of the goal's progress bar when a related
   *  action is completed.
   */
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

export default GoalProgress;
