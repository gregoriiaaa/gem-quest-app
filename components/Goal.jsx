import * as React from "react";

import { StyleSheet, SafeAreaView } from "react-native";
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
        <Text>{props.progress}</Text>
        <GoalProgress progress={props.progress}></GoalProgress>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  goalsCard: {
    height: 100,
    width: 300,
    backgroundColor: "#bd92cd",
  },

  description: {
    color: "#ffffff",
  },

  progress: {},
});

export default Goal;
