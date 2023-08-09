import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Profile from "../screens/Profile";

import LogInForm from "../components/LogInForm";
{
  /* <Profile /> */
}
const UserProfile = ({ profileData }) => {
  return (
    <View style={styles.container}>
      {/* <LogInForm /> */}
      <Text>Welcome to the Profile page!</Text>
      <Text>Gender Identity: {profileData?.GenderIdentity}</Text>
      <Text>Ethnic Identity: {profileData?.EthnicIdentity}</Text>
      <Text>Personality Type: {profileData?.PersonalityType}</Text>
      <Text>Do you have any pets?: {profileData?.Pets}</Text>
      <Text>Dietary Restriction? {profileData?.DietaryRestriction}</Text>
      <Text>Coffee, Tea, Boba, or All? {profileData?.DrinkTypes}</Text>
      <Text>Comfort meals/food? {profileData?.ComfortFood}</Text>
      <Text>Movie, show, book person: {profileData?.EntertainmentType}</Text>
      <Text>Top Movie: {profileData?.TopMovie}</Text>
      <Text>Top Show: {profileData?.TopShow}</Text>
      <Text>Top Book: {profileData?.TopBook}</Text>
      <Text>Music Taste: {profileData?.MusicTaste}</Text>
      <Text>Top Artist: {profileData?.TopArtist}</Text>
      {/* Add other content for the Profile here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  userData: {
    marginTop: 15,
  },
});

export default UserProfile;
