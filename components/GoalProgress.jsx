import { useState } from "react";

import { StyleSheet, SafeAreaView } from "react-native";

import * as Progress from "react-native-progress";

const GoalProgress = (props) => {
  const [progress, setProgress] = useState(0);

  return <Progress.Bar progress={0.3} width={200} />;
};

const styles = StyleSheet.create({});

export default GoalProgress;
