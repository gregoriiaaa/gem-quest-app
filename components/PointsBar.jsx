import * as React from "react";

import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import * as Progress from "react-native-progress";

const PointsBar = (props) => {
  return (
    <View>
      <Progress.Bar
        progress={props.progress}
        color="#fde3e7"
        unfilledColor="#fff1cb"
        width={300}
        height={20}
        borderRadius={20}
        animated={true}
        borderWidth={3}
        borderColor="#bd92cd"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default PointsBar;
