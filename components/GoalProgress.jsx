import { useState } from "react";

import { View, StyleSheet, SafeAreaView } from "react-native";

import * as Progress from "react-native-progress";

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
