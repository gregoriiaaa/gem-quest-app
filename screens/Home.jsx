import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomNavigation from "../components/BottomNavigation";
import Quest from "../classes/Quest";
import { addNewQuest, getQuestById } from "../database/questQueries";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home page!</Text>
      {/* Add other content for the Home page here */}
      <button
        onClick={async () => {
          await getQuestById("osASZVD2RvH99s7jE9b2").then((result) =>
            console.log(result)
          );
        }}
      >
        Add a new quest
      </button>
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
