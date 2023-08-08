import * as React from "react";

import { Text, View, Image, StyleSheet, SafeAreaView } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import * as Progress from "react-native-progress";

const PointsBar = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flexDirection: "row",
  },
  barContainer: {
    justifyContent: "center",
    left: 20,
    top: 15,
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

  icon: {
    size: "large",
  },
});

export default PointsBar;
