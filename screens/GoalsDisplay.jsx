import * as React from "react";

import {
  ImageBackground,
  Text,
  ScrollView,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import Goal from "../components/Goal";
import PointsBar from "../components/PointsBar";

const Gems = {
  Amber: require("../assets/gems/Amber.png"),
  Pearl: require("../assets/gems/Pearl.png"),
  Ruby: require("../assets/gems/Ruby.png"),
  Jade: require("../assets/gems/Jade.png"),
  Sapphire: require("../assets/gems/Sapphire.png"),
  Emerald: require("../assets/gems/Emerald.png"),
  Amethyst: require("../assets/gems/Amethyst.png"),
  RoseQuartz: require("../assets/gems/RoseQuartz.png"),
  Diamond: require("../assets/gems/Diamond.png"),
};

const GoalsDisplay = (props) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <PointsBar progress={props.progress} icon={Gems.Amethyst}></PointsBar>
      </View>

      {/* <ScrollView style={styles.goalsContainer}>
        <Goal
          description="post 5 quests"
          progress={3 / 5}
          icon="../assets/gemQuest.png"
        ></Goal>
        <Goal></Goal>
        <Goal></Goal>
      </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  goalsContainer: {},
});

export default GoalsDisplay;
