import * as React from "react";

import { Text, View, StyleSheet } from "react-native";

import { Avatar } from "react-native-paper";

import * as Progress from "react-native-progress";

/** 
 * Returns a component that renders the main points bar, including the points
 * total and remaining quantity until the next gem is acquired.
 *
 * @param {Float} progress (TODO: Convert to fraction string) Total progress.
 * @param {string} icon (TODO: Change gem avatar to custom circle) Gem icon.
 * @return {View} PointsBar
 */
const PointsBar = (props) => {
  return (
    <View>
      <View style={styles.container}>
        {/* Points total and bar */}
        <View style={styles.bar}>
          <Text style={styles.totalPts}>{props.progress}</Text>
          <Progress.Bar
            progress={props.progress}
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
        10 pts
        <Text style={{ fontWeight: "normal" }}> until </Text>
        <Text style={styles.nextGem}>EMERALD!</Text>
      </Text>
    </View>
  );
};

/** 
 *  Styles are slightly forced with hard-coded numerical values.
 *  May not be accurately represented on different models/devices.
 */
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flexDirection: "row",
  },
  bar: {
    justifyContent: "center",
    left: 20,
  },
  totalPts: {
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
    color: "#33a398",
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
