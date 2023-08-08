import * as React from "react";

import { View, StyleSheet, SafeAreaView } from "react-native";
import { Avatar, Button, Card, ProgressBar, Text } from "react-native-paper";
import GoalProgress from "./GoalProgress";

const Goal = (props) => {
  return (
    <Card style={styles.goalsCard}>
      <Card.Title
        title={props.description}
        titleStyle={styles.description}
        left={(props) => <Avatar.Icon {...props} icon={props.icon} />}
      />
      <Card.Content>
        <View style={styles.progress}>
          <Text style={styles.completion}>{props.progress}</Text>
          <GoalProgress progress={props.progress}></GoalProgress>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  goalsCard: {
    flex: 1,
    width: 300,
    backgroundColor: "#bd92cd",
    borderColor: "#c6c8c6",
    borderWidth: 2,
  },

  description: {
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "bold",
  },

  completion: {
    textAlign: "center",
    color: "#6770e0",
    fontWeight: "bold",
    top: 25,
  },

  progress: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: 10,
    paddingLeft: 40,
  },
});

export default Goal;
