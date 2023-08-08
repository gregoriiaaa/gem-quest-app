import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Explore = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Explore page!</Text>
      {/* Add other content for the Explore page here */}
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

export default Explore;
