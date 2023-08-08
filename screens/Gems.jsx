import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Gems = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Gems page!</Text>
      {/* Add other content for the Gems page here */}
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

export default Gems;
