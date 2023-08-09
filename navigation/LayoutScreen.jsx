import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomNavigation from "../components/BottomNavigation";
import Header from "../components/Header";

const LayoutScreen = ({ navigation }) => {
  console.log(navigation);
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      {/* Remove this to remove text from Log In page */}
      {/* <Text>This is the LayoutScreen window</Text> */}
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LayoutScreen;
