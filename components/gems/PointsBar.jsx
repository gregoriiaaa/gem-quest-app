import * as React from "react";
import { useState } from "react";

import { Text, View, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import * as Progress from "react-native-progress";

/**
 * Returns a View component that renders the main points bar, including
 * the points total and remaining quantity until the next gem is acquired.
 *
 * @author Randy Nguyen
 * @param {progress, maxProgress, icon} props
 * @param {int} progress Total progress.
 * @param {int} maxProgress Denominator.
 * (TODO: May have to change gem avatar to a custom circle.
 * This is because the gem pngs are getting cropped off in the avatar circle)
 * @param {string} icon Gem icon.
 * @returns {View} PointsBar
 */
const PointsBar = (props) => {
  /**
   * TODO: May need to change using hooks:
   *  State of the progress bar
   *  State of the gem icon displayed
   *  Number of points remaining until next gem
   *  The next gem's icon, text, and color styling
   */
  const [progress, setProgress] = useState(props.progress);
  const [icon, setIcon] = useState(props.icon);

  return (
    <View>
      <View style={styles.container}>
        {/* Points total and bar */}
        <View style={styles.progressBar}>
          <Text style={styles.progress}>
            {progress + "/" + props.maxProgress}
          </Text>
          <Progress.Bar
            progress={progress / props.maxProgress}
            color="#fde3e7"
            unfilledColor="#fff1cb"
            width={300}
            height={35}
            animated={true}
            borderRadius={20}
            borderWidth={3}
            borderColor="#bd92cd"
          />
        </View>
        {/* Gem avatar in circle */}
        <View style={styles.gemAvatar}>
          <Avatar.Image size={42} source={props.icon} style={styles.icon} />
        </View>
      </View>
      {/* Remaining points. Separated for flexing underneath. */}
      <Text style={styles.remainingPts}>
        {props.maxProgress - progress + " pts"}
        <Text style={{ fontWeight: "normal" }}> until </Text>
        <Text style={styles.nextGem}>AMETHYST!</Text>
      </Text>
    </View>
  );
};

/**
 *  Styles are slightly forced with hard-coded numerical values.
 *  May not be accurately represented on different models/devices.
 *  Based off Figma iPhone 14 dimensions.
 */
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flexDirection: "row",
  },
  progressBar: {
    justifyContent: "center",
    left: 20,
  },
  progress: {
    textAlign: "center",
    paddingBottom: 5,
    left: 25,
  },
  remainingPts: {
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 30,
  },
  gemAvatar: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 20,
  },
  nextGem: {
    fontWeight: "bold",
    color: "#ec8bee",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fde3e7",
    borderWidth: 3,
    borderColor: "#bd92cd",
    width: 75,
    height: 75,
    borderRadius: 75,
  },
});

export default PointsBar;
