import React from "react";
import {
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Text, Button } from "react-native-paper";

const Profile = ({ route, navigation }) => {
  const { profileData } = route.params || {};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.logoImage}>
          <Image
            source={require("../assets/gemQuestLogo_transparent.png")}
            alt="GemQuest logo showcasing pride colors"
            style={styles.image}
          />
        </View>
        <View style={styles.sections}>
          <Text style={styles.h2} variant="titleMedium">
            Your information has been successfully saved.{" "}
          </Text>
        </View>
        <Text variant="titleMedium">
          Gender Identity:{" "}
          <Text variant="bodyMedium">{profileData.GenderIdentity}</Text>
        </Text>
        <Text variant="titleMedium">
          Ethnic Identity:{" "}
          <Text variant="bodyMedium">{profileData.EthnicIdentity}</Text>
        </Text>
        <Text variant="titleMedium">
          Personality Type:{" "}
          <Text variant="bodyMedium">{profileData.PersonalityType}</Text>
        </Text>
        <Text variant="titleMedium">
          Do you have any pets?
          <Text variant="bodyMedium"> {profileData.Pets}</Text>
        </Text>
        <Text variant="titleMedium">
          Dietary Restriction?{" "}
          <Text variant="bodyMedium">{profileData.DietaryRestriction}</Text>
        </Text>
        <Text variant="bodyMedium">
          Coffee, Tea, Boba, or All? {profileData.DrinkTypes}
        </Text>
        <Text variant="titleMedium">
          Comfort meals/food?{" "}
          <Text variant="bodyMedium">{profileData.ComfortFood}</Text>
        </Text>
        <Text variant="titleMedium">
          Movie, show, book person:{" "}
          <Text variant="bodyMedium">{profileData.EntertainmentType}</Text>
        </Text>
        <Text variant="titleMedium">
          Top Movie: <Text variant="bodyMedium">{profileData.TopMovie}</Text>
        </Text>
        <Text variant="titleMedium">
          Top Show: <Text variant="bodyMedium">{profileData.TopShow}</Text>
        </Text>
        <Text variant="titleMedium">
          Top Book: <Text variant="bodyMedium">{profileData.TopBook}</Text>
        </Text>
        <Text variant="titleMedium">
          Music Taste:{" "}
          <Text variant="bodyMedium">{profileData.MusicTaste}</Text>
        </Text>
        <Text variant="titleMedium">
          Top Artist:
          <Text variant="bodyMedium">{profileData.TopArtist}</Text>
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              navigation.navigate("LayoutScreen");
            }}
            mode="contained"
            style={styles.button}
            buttonColor="#21005D"
            icon="arrow-right"
            contentStyle={styles.submitButtonContent}
          >
            Continue to App
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  scrollView: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  logoImage: {
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
  },
  sections: {
    width: 300,
    height: 70,
    borderBottomWidth: 3,
    borderBottomColor: "#21005d",
    alignItems: "center",
    marginVertical: 20,
  },
  h2: {
    marginTop: 20,
    fontWeight: "800",
    color: "#56595D",
  },
  button: {
    marginVertical: 2,
    borderRadius: 5,
    marginTop: "1em",
    // width: "150px",
  },
  buttonContainer: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "end",
    marginTop: "2em",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  submitButtonContent: {
    flexDirection: "row-reverse",
  },
});

export default Profile;
