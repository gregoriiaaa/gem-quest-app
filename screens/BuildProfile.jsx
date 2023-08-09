import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { Text } from "react-native-paper";
import BuildProfileForm from "../components/editProfileForm";

const BuildProfile = ({ navigation }) => {
  const handleSaveProfile = (profileData) => {
    // Navigate to the Profile screen and pass the profileData
    navigation.navigate("Profile", { profileData });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <BuildProfileForm
          navigation={navigation}
          onSaveProfile={handleSaveProfile}
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

export default BuildProfile;
