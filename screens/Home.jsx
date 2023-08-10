import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import MyQuestsCards from "../components/MyQuestsCards";
import AttendingQuestsCard from "../components/AttendingQuestsCard";
import AvailableQuests from "../components/AvailableQuests";
import DraftsCard from "../components/draftsCard";

import { Searchbar } from "react-native-paper";

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <MyQuestsCards />
        <AttendingQuestsCard />
        <Searchbar
          placeholder="Search..."
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <AvailableQuests />
        <DraftsCard />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    // justifyContent: "center",
    // alignItems: "center",
  },
  scrollView: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
});

export default Home;
