import * as React from "react";

import { StyleSheet, SafeAreaView } from "react-native";
import { Avatar, Button, Card, ProgressBar, Text } from "react-native-paper";
import Goal from "../components/Goal";

const GoalsDisplay = (props) => {
  return (
    <SafeAreaView style={styles.goalsContainer}>
      <Goal></Goal>
      <Goal></Goal>
      <Goal></Goal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 1,
  },
});

export default GoalsDisplay;
