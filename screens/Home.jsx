import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomNavigation from "../components/BottomNavigation";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home page!</Text>
      {/* Add other content for the Home page here */}
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

export default Home;
