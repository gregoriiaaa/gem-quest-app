import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomNavigation from "../components/BottomNavigation";
import QuestCard from "../components/QuestCard";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home page!</Text>
      {/* Add other content for the Home page here */}
      <QuestCard />
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
