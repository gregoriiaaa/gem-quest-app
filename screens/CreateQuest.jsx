import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar} from "react-native";
import NewQuestForm from "../components/NewQuestForm.jsx";

const CreateQuest = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to the Create a Quest page!</Text>
      <ScrollView style={styles.scrollView}>
        <NewQuestForm
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default CreateQuest;
