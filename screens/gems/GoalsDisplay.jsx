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
import Goal from "../../components/gems/Goal";
import PointsBar from "../../components/gems/PointsBar";
import Tabs from "../../components/gems/Tabs";

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
      <View style={styles.pointsBarContainer}>
        <PointsBar progress={props.progress} icon={Gems.Amethyst}></PointsBar>
      </View>

      <View style={styles.tabs}>
        <Tabs></Tabs>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  pointsBarContainer: {
    paddingBottom: 40,
  },

  tabs: {
    flex: 1,
    justifyContent: "flex-start",
  },
});

export default GoalsDisplay;
