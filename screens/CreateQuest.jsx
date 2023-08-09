import React from "react";
import { View, Text, StyleSheet } from "react-native";
import QuestForm from "../components/QuestForm.jsx";

const CreateQuest = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Create a Quest page!</Text>
      <View style={styles.newUserForm}>
        <QuestForm navigation={navigation} />
      </View>
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
