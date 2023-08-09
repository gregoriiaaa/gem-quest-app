import * as React from "react";

import { View, StyleSheet, SafeAreaView } from "react-native";

import PointsBar from "../../components/gems/PointsBar";
import Tabs from "../../components/gems/Tabs";

/**
 *  Mapping of gem pngs.
 */
const Gems = {
  Amber: require("../../assets/gems/Amber.png"),
  Pearl: require("../../assets/gems/Pearl.png"),
  Ruby: require("../../assets/gems/Ruby.png"),
  Jade: require("../../assets/gems/Jade.png"),
  Sapphire: require("../../assets/gems/Sapphire.png"),
  Emerald: require("../../assets/gems/Emerald.png"),
  Amethyst: require("../../assets/gems/Amethyst.png"),
  RoseQuartz: require("../../assets/gems/RoseQuartz.png"),
  Diamond: require("../../assets/gems/Diamond.png"),
};

/**
 * Returns a GemScreen; a component that displays:
 * 1) the main points bar
 * 2) the navigation tabs between "goals" and "gems"
 *
 * Should be directed to in the main bottom navigation bar when tapping "Gem".
 *
 * @author Randy Nguyen
 * @param {progress, maxProgress} props
 * @param {int} progress PointsBar progress.
 * @param {int} maxProgress PointsBar denominator.
 * @returns {SafeAreaView} GemScreen
 */
const GemScreen = (props) => {
  /** Maybe props should be the USER info-- when they
   *  tap the GemScreen, we pass their data from backend into the
   *  Tabs & PointsBar components
   */
  return (
    /** Formats view for mobile notches. */
    <SafeAreaView style={styles.container}>
      {/* Main Points Bar */}
      <View style={styles.pointsBar}>
        <PointsBar
          progress={props.progress}
          maxProgress={props.maxProgress}
          icon={Gems.Amethyst}
        ></PointsBar>
      </View>
      {/* Goals & Gems Navigation Tabs */}
      <View style={styles.tabs}>
        <Tabs></Tabs>
      </View>
    </SafeAreaView>
  );
};

/**
 *  Styles are slightly forced with hard-coded numerical values.
 *  May not be accurately represented on different models/devices.
 *  Based off Figma iPhone 14 dimensions.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pointsBar: {
    paddingBottom: 40,
  },
  tabs: {
    flex: 1,
  },
});

export default GemScreen;
