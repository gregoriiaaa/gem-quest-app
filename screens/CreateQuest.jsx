import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CreateQuest = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Create a Quest page!</Text>
      {/* Add other content for the Create a Quest page here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreateQuest;
