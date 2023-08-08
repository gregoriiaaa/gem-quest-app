import * as React from "react";

import {
  ImageBackground,
  Text,
  ScrollView,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import Goal from "../components/Goal";
import PointsBar from "../components/PointsBar";

const GoalsDisplay = (props) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <PointsBar progress={0.3}></PointsBar>
      <ScrollView style={styles.goalsContainer}>
        <Goal
          description="post 5 quests"
          progress={3 / 5}
          icon="../assets/gemQuest.png"
        ></Goal>
        <Goal></Goal>
        <Goal></Goal>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  goalsContainer: {
    columnGap: 40,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default GoalsDisplay;
