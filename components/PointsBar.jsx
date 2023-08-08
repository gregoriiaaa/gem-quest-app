import * as React from "react";

import { Text, View, Image, StyleSheet, SafeAreaView } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import * as Progress from "react-native-progress";

const PointsBar = (props) => {
  return (
    <View>
      <View style={styles.container}>
        
        <View style={styles.barContainer}>
          <Text style={styles.totalPts}>990/1000</Text>

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

        <View style={styles.gemContainer}>
          <Avatar.Image size={42} source={props.icon} style={styles.gem} />
        </View>
      </View>

      <Text style={styles.remainingPts}>
        10 pts
        <Text style={{ fontWeight: "normal" }}> until </Text>
        <Text style={styles.nextGem}>EMERALD!</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flexDirection: "row",
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
  nextGem: {
    fontWeight: "bold",
    color: "#33a398",
  },
  barContainer: {
    justifyContent: "center",
    left: 20,
  },
  gemContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 20,
  },
  gem: {
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
